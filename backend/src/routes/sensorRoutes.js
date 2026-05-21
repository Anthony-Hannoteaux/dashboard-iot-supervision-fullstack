import express from "express";
import sensorController from "../controllers/sensorController.js";

const sensorRouter = express.Router();

sensorRouter.get("/", sensorController.getAllSensor);

export default sensorRouter;