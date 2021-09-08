import express from "express";
import { router as authRouter } from "./entities/auth.route";

export const apiRoutes = express.Router();

apiRoutes.use("/auth", authRouter);

