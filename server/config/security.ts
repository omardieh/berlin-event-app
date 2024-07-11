import helmet from 'helmet';
import cors from 'cors';
import { Express } from "express";

export const securityConfig = (app: Express) => {
    app.use(helmet());
    app.use(cors());
}