import express from "express";
import { createPancakesFeature } from "./features";

export function createApp() {
  const app = express();

  app.get("/status", (req, res) => {
    res.json({ status: "ready" });
  });
//   const pancakesFeature = createPanc akesFeature();
  app.get("/", (req, res) => {
    res.json([]);
  });

  return app;
}
