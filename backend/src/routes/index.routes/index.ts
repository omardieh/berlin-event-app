import { Application } from 'express';
import { indexRoutes } from './index.routes';

export class InitiateIndexRoutes {
  constructor(public app: Application) {
    this.app = app;
    this.app.use('/', indexRoutes);
  }
}
