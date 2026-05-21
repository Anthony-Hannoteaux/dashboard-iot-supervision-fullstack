import express from "express";
import sensorController from "../controllers/sensorController.js";
import measureController from "../controllers/measureController.js";

const sensorRouter = express.Router();

sensorRouter.get("/", sensorController.getAllSensor);
sensorRouter.get("/:sensorId", sensorController.getSensorById);
/**
 * On souhaite récupérer les messures d'un capteur
 * Par l'intermédiaire du endpoint
 * /api/sensors/:sensorId/measures
 */
sensorRouter.get("/:sensorId/measures", measureController.getMeasureBySensorId);

export default sensorRouter;