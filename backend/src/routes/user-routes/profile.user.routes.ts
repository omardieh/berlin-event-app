import express, { Request, Response, Router } from 'express';

class UserProfile {
  public userProfileRoutes: Router;
  constructor() {
    this.userProfileRoutes = express.Router();
    this.getUserInfo();
  }

  private getUserInfo(): void {
    this.userProfileRoutes.get('/', (_: Request, res: Response) => {
      res.json({ message: 'User Info' });
    });
  }
}

export const { userProfileRoutes } = new UserProfile();
