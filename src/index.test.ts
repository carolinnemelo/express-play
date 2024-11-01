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
  const app = createApp()// if you have the app inside every test, that means that they are isolated

  const result = await request(app).get("/api/v1/pancakes");

  deepEqual(result.status, 200)
  deepEqual(result.body, []);
})

test("POST /api/v1/pancakes", async () => {
  const app = createApp(); // if you have the app inside every test, that means that they are isolated

  const result = await request(app)
    .post("/api/v1/pancakes")
    .send({ layers: [] });

  deepEqual(result.status, 201);
});
