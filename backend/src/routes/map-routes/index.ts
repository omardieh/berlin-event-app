import { Application } from 'express';
import { router as amenitiesRoutes } from './amenities.routes';

export class InitiateMapRoutes {
  constructor(public app: Application) {
    this.app = app;
    // this.app.use('/map', locationRoutes);
    this.app.use('/', amenitiesRoutes);
  }
}
