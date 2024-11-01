import express from "express";
import { createPancakesFeature, Db, Pancake } from "./features/pancakes";

function createDb(): Db {
  const Data = [];
  return { getAll: async () => [], cookPancake: async (pancake: Pancake) => {} };
}
export function createApp() {
  //for your functions don't use create. prepare pancakes, use natural language. Ubiquitous language
  const app = express();

  app.use(express.json())

  app.get("/status", (req, res) => {
    res.json({ status: "ready" });
  });

  const db = createDb(); //as this grows can create a new file

  const pancakesFeature = createPancakesFeature(db);
  app.use("/api/v1/pancakes", pancakesFeature.getRouter());

  return app;
}


