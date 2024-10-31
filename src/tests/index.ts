import express from "express";
import { Console } from "node:console";

export function createApp() {
  const app = express();

  app.get("/status", (req, res) => {
    res.json({ status: "ready" });
  });

  return app;
}
