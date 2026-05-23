import express from "express";
import measureController from "../controllers/measureController.js";

const measureRouter = express.Router();

measureRouter.get("/", measureController.getAllMeasure);
measureRouter.get("/thresholds", measureController.getMeasuresWithThresholds);

export default measureRouter;