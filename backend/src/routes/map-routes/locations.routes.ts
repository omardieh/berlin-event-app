import { Location } from '@/models';
import express, { Request, Response, Router } from 'express';

class LocationRoutes {
  public locationRoutes: Router;
  constructor() {
    this.locationRoutes = express.Router();
    this.getLocations();
    this.getLocationsByAmenity();
  }

  private getLocations(): void {
    this.locationRoutes.get('/', async (_: Request, res: Response) => {
      const locations = await Location.find().limit(50);
      res.json(locations);
    });
  }
  private getLocationsByAmenity(): void {
    this.locationRoutes.get('/:amenity', async (req: Request, res: Response) => {
      if (!req.params.amenity) return;
      const { amenity } = req.params;
      const locations = await Location.find({
        amenity: amenity,
      }).limit(50);
      res.json(locations);
    });
  }
}

export const { locationRoutes } = new LocationRoutes();
