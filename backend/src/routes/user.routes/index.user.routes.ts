import express, { Request, Response, Router } from 'express';

class UserMain {
  public userMainRoutes: Router;
  constructor() {
    this.userMainRoutes = express.Router();
    this.getUser();
  }

  private getUser(): void {
    this.userMainRoutes.get('/', (_: Request, res: Response) => {
      res.json({ message: 'User Main Route' });
    });
  }
}

export const { userMainRoutes } = new UserMain();
