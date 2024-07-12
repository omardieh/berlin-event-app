import helmet from "helmet";
import cors from "cors";
import { Express } from "express";

export const securityConfig = (app: Express) => {
  app.use(helmet());
  cors({
    origin: [process.env.CLIENT_URL || ""],
    credentials: true,
    exposedHeaders: ["Authorization"],
  });
};
