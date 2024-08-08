import express, { Request, Response, Router } from 'express';

class UserRoutes {
  public userRoutes: Router;
  constructor() {
    this.userRoutes = express.Router();
    this.getUser();
  }

  private getUser(): void {
    this.userRoutes.get('/', (_: Request, res: Response) => {
      res.json({ message: 'User Main Route' });
    });
  }
}

export const { userRoutes } = new UserRoutes();
