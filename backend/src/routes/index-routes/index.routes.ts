import express, { Request, Response, Router } from 'express';

class IndexRoutes {
  public indexRoutes: Router;
  constructor() {
    this.indexRoutes = express.Router();
    this.loadWelcomePage();
  }

  private loadWelcomePage(): void {
    this.indexRoutes.get('/', (_: Request, res: Response) => {
      res.render('index', { siteTitle: 'Hello World' });
    });
  }
}

export const { indexRoutes } = new IndexRoutes();
