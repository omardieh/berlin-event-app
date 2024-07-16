import { Application } from 'express';
import { indexMainRoutes } from './index.index.routes';

export class IndexRoutes {
  constructor(public app: Application) {
    this.app = app;
    this.app.use('/', indexMainRoutes);
  }
}
