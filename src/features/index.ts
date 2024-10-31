import express from "express";

export function createPancakesFeature() {
  return {
    getRouter() {
      const router = express.Router();
      router.get("/", (req, res) => {
        res.json(["sou uma panquequinha gostosa"]);
      });
      return router;
    },
  }; //all functions inside an object
}
