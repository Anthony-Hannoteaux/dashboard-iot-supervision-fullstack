import express from "express";
import measureController from "../controllers/measureController.js";

const measureRouter = express.Router();

measureRouter.get("/", measureController.getAllMeasure);

export default measureRouter;