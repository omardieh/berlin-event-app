import express, { Request, Response, Router } from 'express';

class UserUploads {
  public userUploadsRoutes: Router;
  constructor() {
    this.userUploadsRoutes = express.Router();
    this.updateUserAvatar();
  }

  private updateUserAvatar(): void {
    this.userUploadsRoutes.put('/', (_: Request, res: Response) => {
      res.json({ message: 'User Avatar Updated' });
    });
  }
}

export const { userUploadsRoutes } = new UserUploads();
