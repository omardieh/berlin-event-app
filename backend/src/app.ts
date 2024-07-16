import express, { Request, Response } from 'express';
import { environmentConfig, securityConfig } from './config';

const app = express();

function initializeConfigs(): void {
  environmentConfig(app);
  securityConfig(app);
}

function setRoutes(): void {
  app.get('/', (_: Request, res: Response) => {
    res.render('index', { siteTitle: 'Hello World' });
  });
}

initializeConfigs();
setRoutes();

export default app;
