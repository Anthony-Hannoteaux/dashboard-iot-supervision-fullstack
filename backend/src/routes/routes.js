import express from "express";
import healthRouter from "./healthRoutes.js"
import locationRouter from "./locationRoutes.js";
import sensorRouter from "./sensorRoutes.js";
import measureRouter from "./measureRoutes.js";
import alertRouter from "./alertRouters.js";
import dashboardRouter from "./dashboardRouters.js";

const router = express.Router();

// Vérification de l'état de l'API et de la connexion avec la base de données PostgreSQL
router.use('/health', healthRouter);

// Endpoint communiquant avec la table "location"
router.use('/locations', locationRouter);

// Endpoint communiquant avec la table "sensor"
router.use('/sensors', sensorRouter);

// Endpoint communiquant avec la table "measure"
router.use('/measures', measureRouter);

// Endpoint communiquant avec la table "alert"
router.use('/alerts', alertRouter);

// Endpoint permettant de récupérer les données nécessaires au dashboard
router.use("/dashboard", dashboardRouter);

export default router;