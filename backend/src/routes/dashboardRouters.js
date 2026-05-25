import express from "express";
import dashboardControler from "../controllers/dashboardController.js";

const dashboardRouter = express.Router();

dashboardRouter.get("/locations", dashboardControler.getDashboardLocation);
dashboardRouter.get("/sensor/:sensorId/measures", dashboardControler.getDashboardSensorMeasures);
dashboardRouter.get("/alerts", dashboardControler.getDashboardAlerts);

export default dashboardRouter;