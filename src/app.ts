import express from "express";
import { createPancakesFeature } from "./features";

export function createApp() {
  const app = express();

  app.get("/status", (req, res) => {
    res.json({ status: "ready" });
  });
  const pancakesFeature = createPancakesFeature();
  app.use("/api/v1/pancakes", pancakesFeature.getRouter());
  app.use("/api/v1/pankcakes", pancakesFeature.getRouter()); //ter duas rotas quando tem algum erro escrito pq vai quebrar pra todo mundo que ja usa o app

  return app;
}
