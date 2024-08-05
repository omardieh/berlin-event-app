import { Application } from 'express';
import { mapAmenitiesRoutes } from './amenities.map.routes';
import { mapRoutes } from './map.routes';

export class InitiateMapRoutes {
  constructor(public app: Application) {
    this.app = app;
    this.app.use('/map', mapRoutes);
    this.app.use('/map/amenities', mapAmenitiesRoutes);
  }
}
