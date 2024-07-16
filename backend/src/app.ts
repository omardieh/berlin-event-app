import express, { Request, Response } from 'express';
import { securityConfig } from '@/config';
// import { IApp } from '@/types';

const app = express();

function initializeConfigs(): void {
  // new EnvironmentConfig(app);
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
