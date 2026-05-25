import express from "express";
import dashboardControler from "../controllers/dashboardController.js";

const dashboardRouter = express.Router();

dashboardRouter.get("/locations", dashboardControler.getDashboardLocation);

export default dashboardRouter;