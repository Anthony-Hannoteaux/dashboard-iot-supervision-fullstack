import express from "express";
import cors from "cors";
import router from "./routes/routes.js";

const app = express();

const corsOptions = {
    origin: process.env.FRONTEND_ORIGIN || "http://localhos:5173"
}

app.use(cors(corsOptions))

app.use(express.json());

app.use('/api', router);

export default app;