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

// Health check endpoint
app.get("/make-server-d6d8acf9/health", (c) => {
  return c.json({ status: "ok" });
});

// Get all submissions
app.get("/make-server-d6d8acf9/submissions", async (c) => {
  try {
    const submissions = await kv.getByPrefix("submission:");
    return c.json(submissions);
  } catch (error) {
    return c.json({ error: error.message }, 500);
  }
});

// Create submission
app.post("/make-server-d6d8acf9/submissions", async (c) => {
  try {
    const { type, data } = await c.req.json();
    const id = crypto.randomUUID();
    const submission = {
      id,
      type,
      createdAt: Date.now(),
      data,
    };
    await kv.set(`submission:${id}`, submission);
    return c.json({ ok: true, id }, 201);
  } catch (error) {
    return c.json({ error: error.message }, 400);
  }
});

// Delete submission
app.delete("/make-server-d6d8acf9/submissions/:id", async (c) => {
  try {
    const id = c.req.param("id");
    await kv.del(`submission:${id}`);
    return c.json({ ok: true });
  } catch (error) {
    return c.json({ error: error.message }, 500);
  }
});

const port = Number(Deno.env.get("PORT") ?? "8787");
Deno.serve({ port }, app.fetch);