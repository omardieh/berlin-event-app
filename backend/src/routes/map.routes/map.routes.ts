import { MapModel } from '@/models';
import express, { Request, Response, Router } from 'express';

class MapRoutes {
  public mapRoutes: Router;
  constructor() {
    this.mapRoutes = express.Router();
    this.getUser();
  }

  private getUser(): void {
    this.mapRoutes.get('/', async (_: Request, res: Response) => {
      const locations = await MapModel.find({
        'properties.amenity': 'nightclub',
      });
      console.log(locations);
      res.json(locations);
    });
  }
}

export const { mapRoutes } = new MapRoutes();
