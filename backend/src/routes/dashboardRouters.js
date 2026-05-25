import express from "express";
import dashboardControler from "../controllers/dashboardController.js";

const dashboardRouter = express.Router();

dashboardRouter.get("/locations", dashboardControler.getDashboardLocation);
dashboardRouter.get("/sensor/:sensorId/measures", dashboardControler.getDashboardSensorMeasures);


export default dashboardRouter;