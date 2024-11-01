import express from "express";

type Pancake = unknown;

type Db = {
  getAll: () => Promise<Pancake[]>;
}; //don't use inline any

export function createPancakesFeature(db: Db) {
  //could start the db here to make it here first

  return {
    getRouter() {
      const router = express.Router();


      router.get("/",async (req, res) => {
        res.json(await db.getAll()); //get all pancakes

      });

      router.post("/", async (req, res) => {
        res.json({ id: -1 }); 
      });
      return router;
    },
  }; //all functions inside an object
}
