import express from "express";
import healthController from "../controllers/healthController.js";

const healthRouter = express.Router();

healthRouter.get("/", healthController.getHealth);
healthRouter.get("/db", healthController.getDatabaseHealth);

export default healthRouter;