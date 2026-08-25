import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

const app = new Hono();
app.use("*", logger(console.log));
app.use("/*", cors({
  origin: "*",
  allowHeaders: ["Content-Type", "Authorization", "apikey"],
  allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  exposeHeaders: ["Content-Length"],
  maxAge: 600,
}));

app.get("/health", (c) => c.json({ status: "ok" }));
app.get("/submissions", async (c) => {
  try { return c.json(await kv.getByPrefix("submission:")); }
  catch (error) { return c.json({ error: (error as Error).message }, 500); }
});
app.post("/submissions", async (c) => {
  try {
    const { type, data } = await c.req.json();
    const id = crypto.randomUUID();
    await kv.set(`submission:${id}`, { id, type, createdAt: Date.now(), data });
    return c.json({ ok: true, id }, 201);
  } catch (error) { return c.json({ error: (error as Error).message }, 400); }
});
app.delete("/submissions/:id", async (c) => {
  try { await kv.del(`submission:${c.req.param("id")}`); return c.json({ ok: true }); }
  catch (error) { return c.json({ error: (error as Error).message }, 500); }
});

app.get("*", async (c) => {
  if (c.req.path.endsWith("/health")) return c.json({ status: "ok" });
  if (!c.req.path.endsWith("/submissions")) return c.json({ error: "Not found" }, 404);
  try { return c.json(await kv.getByPrefix("submission:")); }
  catch (error) { return c.json({ error: (error as Error).message }, 500); }
});

app.post("*", async (c) => {
  if (!c.req.path.endsWith("/submissions")) return c.json({ error: "Not found" }, 404);
  try {
    const { type, data } = await c.req.json();
    const id = crypto.randomUUID();
    await kv.set(`submission:${id}`, { id, type, createdAt: Date.now(), data });
    return c.json({ ok: true, id }, 201);
  } catch (error) { return c.json({ error: (error as Error).message }, 400); }
});

app.delete("*", async (c) => {
  if (!c.req.path.includes("/submissions/")) return c.json({ error: "Not found" }, 404);
  try { await kv.del(`submission:${c.req.path.split("/").pop()}`); return c.json({ ok: true }); }
  catch (error) { return c.json({ error: (error as Error).message }, 500); }
});

Deno.serve(app.fetch);
