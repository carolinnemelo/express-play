import { deepEqual } from "node:assert";
import request  from "supertest";
import test from "node:test";
import { createApp } from "./app";


test("GET /status", async () => {
  const app = createApp();  

  const result = await request(app).get("/status");
  deepEqual(result.status, 200)
  deepEqual(result.body, { status: "ready" });
});

test("GET /api/v1/pancakes", async () => {
  const app = createApp()

  const result = await request(app).get("/status");

  deepEqual(result.status, 200)
  deepEqual(result.body, []);
})
