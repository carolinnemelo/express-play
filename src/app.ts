import express from "express";
import { createPancakesFeature } from "./features/pancakes";

function createDb() {
  return { getAll: async () => [] };
}
export function createApp() {
  //for your functions don't use create. prepare pancakes, use natural language. Ubiquitous language
  const app = express();

  app.get("/status", (req, res) => {
    res.json({ status: "ready" });
  });

  const db = createDb(); //as this grows can create a new file

  const pancakesFeature = createPancakesFeature(db);
  app.use("/api/v1/pancakes", pancakesFeature.getRouter());

  return app;
}


