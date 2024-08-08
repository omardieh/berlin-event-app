import { Amenity } from '@/models';
import { BaseRouter } from '@/routes';
import { NextFunction, Request, Response } from 'express';

class AmenitiesRoutes extends BaseRouter {
  constructor() {
    super();
    this.router.get('/map/amenities', this.getAllAmenities);
  }

  async getAllAmenities(_: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const amenities = await Amenity.find();
      res.json(amenities);
    } catch (error) {
      next(error);
    }
  }
}

export const { router } = new AmenitiesRoutes();
