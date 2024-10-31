import express from "express";

export function createPancakesFeature() {
  return {
    getRouter() {
      const router = express.Router();
    },
  }; //all functions inside an object
}
