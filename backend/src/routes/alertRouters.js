import express from "express";
import alertController from "../controllers/alertController.js";

const alertRouter = express.Router();

alertRouter.get("/", alertController.getAllAlerts);
alertRouter.post("/", alertController.createAlerts);

export default alertRouter;