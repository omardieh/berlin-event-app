import express from 'express';
import { EnvironmentConfig, LoggingConfig, SecurityConfig } from '@/config';
import { IndexRoutes, UserRoutes } from '@/routes';

class App {
  public app;
  constructor() {
    this.app = express();
    this.initializeConfigs();
    this.setRoutes();
  }

  private initializeConfigs(): void {
    new SecurityConfig(this.app);
    new EnvironmentConfig(this.app);
    new LoggingConfig(this.app);
  }

  private setRoutes(): void {
    new IndexRoutes(this.app);
    new UserRoutes(this.app);
  }
}

const { app } = new App();
export default app;
