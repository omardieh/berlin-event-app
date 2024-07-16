import express, { Application, Request, Response } from 'express';
import { EnvironmentConfig, SecurityConfig } from './config';

export class App {
  public app: Application;
  constructor() {
    this.app = express();
    this.initializeConfigs();
    this.setRoutes();
  }

  private initializeConfigs(): void {
    new EnvironmentConfig(this.app);
    new SecurityConfig(this.app);
  }

  private setRoutes(): void {
    this.app.get('/', (_: Request, res: Response) => {
      res.render('index', { siteTitle: 'Hello World' });
    });
  }
}

const { app } = new App();
export default app;
