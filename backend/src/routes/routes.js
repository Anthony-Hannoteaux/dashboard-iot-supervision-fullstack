import express from "express";
import healthRouter from "./healthRoutes.js"

const router = express.Router();

router.use('/health', healthRouter)

export default router;