import { Application } from 'express';
import { userProfileRoutes } from './profile.user.routes';
import { userUploadsRoutes } from './uploads.user.routes';
import { userRoutes } from './user.routes';

export class InitiateUserRoutes {
  constructor(public app: Application) {
    this.app = app;
    this.app.use('/user/profile', userProfileRoutes);
    this.app.use('/user/uploads', userUploadsRoutes);
    this.app.use('/user', userRoutes);
  }
}
