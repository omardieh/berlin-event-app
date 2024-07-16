import express, { Request, Response, Router } from 'express';

class IndexMain {
  public indexMainRoutes: Router;
  constructor() {
    this.indexMainRoutes = express.Router();
    this.loadWelcomePage();
  }

  private loadWelcomePage(): void {
    this.indexMainRoutes.get('/', (_: Request, res: Response) => {
      res.render('index', { siteTitle: 'Hello World' });
    });
  }
}

export const { indexMainRoutes } = new IndexMain();
