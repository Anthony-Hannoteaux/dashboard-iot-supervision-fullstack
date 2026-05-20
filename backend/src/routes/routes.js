import express from "express";
import healthRouter from "./healthRoutes.js"
import locationRouter from "./locationRoutes.js";

const router = express.Router();

// Vérification de l'état de l'API et de la connexion avec la base de données PostgreSQL
router.use('/health', healthRouter)

// Endpoint communiquant avec la table "location"
router.use('/locations', locationRouter)

export default router;