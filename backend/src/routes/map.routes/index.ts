import { Application } from 'express';
import { mapRoutes } from './map.routes';

export class InitiateMapRoutes {
  constructor(public app: Application) {
    this.app = app;
    this.app.use('/map', mapRoutes);
  }
}
