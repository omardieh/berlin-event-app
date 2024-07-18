import { EnvironmentConfig, LoggingConfig, SecurityConfig } from '@/config';
import { InitiateIndexRoutes, InitiateUserRoutes } from '@/routes';
import express from 'express';

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
    new InitiateIndexRoutes(this.app);
    new InitiateUserRoutes(this.app);
  }
}

const { app } = new App();
export default app;
