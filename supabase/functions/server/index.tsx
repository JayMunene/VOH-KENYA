import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

/* ── Admin authentication ────────────────────────────────────────────
   The passcode lives ONLY on the server (never shipped to browsers).
   Clients exchange it once via POST /admin/login for a deterministic
   bearer token, then send `Authorization: Bearer <token>` on every
   admin request (list / delete / clear submissions). */

const ADMIN_PASSCODE = Deno.env.get("VOH_ADMIN_PASSCODE") ?? "voh2026";

// Deterministic across isolates so every replica accepts the same token.
async function deriveToken(passcode: string): Promise<string> {
  const bytes = new TextEncoder().encode(`voh-admin:${passcode}`);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

let cachedToken: string | null = null;
async function adminToken(): Promise<string> {
  if (!cachedToken) cachedToken = await deriveToken(ADMIN_PASSCODE);
  return cachedToken;
}

// Returns a 401 Response when the caller is not authenticated, else null.
async function checkAdmin(c: any): Promise<Response | null> {
  const header = c.req.header("Authorization") ?? "";
  const provided = header.startsWith("Bearer ") ? header.slice(7).trim() : "";
  const expected = await adminToken();
  if (!provided || provided !== expected) {
    return c.json({ error: "Unauthorized" }, 401);
  }
  return null;
}

const routeAliases = [
  "/health",
  "/make-server-d6d8acf9/health",
] as const;

// Health check endpoint
for (const route of routeAliases) {
  app.get(route, (c) => c.json({ status: "ok" }));
}

const loginRoutes = ["/admin/login", "/make-server-d6d8acf9/admin/login"] as const;
for (const route of loginRoutes) {
  app.post(route, async (c) => {
    try {
      const { passcode } = await c.req.json();
      if (typeof passcode !== "string" || passcode !== ADMIN_PASSCODE) {
        return c.json({ error: "Incorrect passcode" }, 401);
      }
      return c.json({ ok: true, token: await adminToken() });
    } catch {
      return c.json({ error: "Bad request" }, 400);
    }
  });
}

const submissionsListRoutes = ["/submissions", "/make-server-d6d8acf9/submissions"] as const;
for (const route of submissionsListRoutes) {
  app.get(route, async (c) => {
    const authError = await checkAdmin(c);
    if (authError) return authError;
    try {
      const submissions = await kv.getByPrefix("submission:");
      return c.json(submissions);
    } catch (error) {
      return c.json({ error: (error as Error).message }, 500);
    }
  });

  app.delete(route, async (c) => {
    const authError = await checkAdmin(c);
    if (authError) return authError;
    try {
      const items = await kv.getByPrefix("submission:");
      const keys = items
        .map((s: any) => (s && typeof s.id === "string" ? `submission:${s.id}` : null))
        .filter((k): k is string => k !== null);
      if (keys.length > 0) await kv.mdel(keys);
      return c.json({ ok: true, deleted: keys.length });
    } catch (error) {
      return c.json({ error: (error as Error).message }, 500);
    }
  });
}

const submissionsCreateRoutes = ["/submissions", "/make-server-d6d8acf9/submissions"] as const;
for (const route of submissionsCreateRoutes) {
  app.post(route, async (c) => {
    try {
      const body = await c.req.json();
      const validTypes = new Set(["newsletter", "prayer", "membership"]);
      if (!validTypes.has(body?.type)) {
        return c.json({ error: "Invalid submission type" }, 400);
      }
      if (typeof body.data !== "object" || body.data === null || Array.isArray(body.data)) {
        return c.json({ error: "Invalid submission data" }, 400);
      }

      const clean: Record<string, string> = {};
      for (const [key, value] of Object.entries(body.data)) {
        if (typeof value !== "string") continue;
        clean[key.slice(0, 40)] = value.slice(0, 2000);
        if (Object.keys(clean).length >= 20) break;
      }
      if (Object.keys(clean).length === 0) {
        return c.json({ error: "Empty submission" }, 400);
      }
      const id = crypto.randomUUID();
      const submission = {
        id,
        type: body.type,
        createdAt: Date.now(),
        data: clean,
      };
      await kv.set(`submission:${id}`, submission);
      return c.json({ ok: true, id }, 201);
    } catch (error) {
      return c.json({ error: (error as Error).message }, 400);
    }
  });
}

const singleSubmissionRoutes = [
  "/submissions/:id",
  "/make-server-d6d8acf9/submissions/:id",
] as const;
for (const route of singleSubmissionRoutes) {
  app.delete(route, async (c) => {
    const authError = await checkAdmin(c);
    if (authError) return authError;
    try {
      const id = c.req.param("id");
      await kv.del(`submission:${id}`);
      return c.json({ ok: true });
    } catch (error) {
      return c.json({ error: (error as Error).message }, 500);
    }
  });
}

const port = Number(Deno.env.get("PORT") ?? "8787");
Deno.serve({ port }, app.fetch);