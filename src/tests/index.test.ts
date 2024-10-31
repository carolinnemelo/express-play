import { deepEqual } from "node:assert";
import request  from "supertest";
import test from "node:test";
import express from "express";


test("supertest works!", async () => {

  const result = await request(app).get("/status");
  deepEqual(result.status, 200)
  deepEqual(result.body, { status: "ready" });
});
