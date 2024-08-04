import { MapModel } from '@/models';
import express, { Request, Response, Router } from 'express';

class MapAmenities {
  public mapAmenitiesRoutes: Router;
  constructor() {
    this.mapAmenitiesRoutes = express.Router();
    this.getAllAmenities();
  }

  private getAllAmenities(): void {
    this.mapAmenitiesRoutes.get('/', async (_: Request, res: Response) => {
      try {
        const amenities = await MapModel.aggregate([
          { $match: { 'properties.amenity': { $exists: true } } },
          { $unwind: '$properties' },
          { $match: { 'properties.amenity': { $exists: true } } },
          {
            $group: {
              _id: '$properties.amenity',
              count: { $sum: 1 },
            },
          },
          {
            $facet: {
              amenities: [
                {
                  $project: {
                    _id: 0,
                    amenity: '$_id',
                    count: 1,
                  },
                },
              ],
              totalUniqueCount: [{ $count: 'totalUniqueAmenities' }],
            },
          },
          {
            $addFields: {
              totalUniqueCount: { $arrayElemAt: ['$totalUniqueCount.totalUniqueAmenities', 0] },
            },
          },
        ]);
        res.json(amenities);
      } catch (error) {
        console.error(error);
      }
    });
  }
}

export const { mapAmenitiesRoutes } = new MapAmenities();

// [
//   { $match: { 'properties.amenity': { $exists: true } } },
//   { $unwind: '$properties' },
//   { $match: { 'properties.amenity': { $exists: true } } }, // Ensure only documents with `properties.amenity`
//   {
//     $group: {
//       _id: '$properties.amenity',
//       count: { $sum: 1 },
//     },
//   },
//   {
//     $facet: {
//       amenities: [
//         {
//           $project: {
//             _id: 0,
//             amenity: '$_id',
//             count: 1,
//           },
//         },
//       ],
//       totalUniqueCount: [{ $count: 'totalUniqueAmenities' }],
//     },
//   },
//   {
//     $addFields: {
//       totalUniqueCount: { $arrayElemAt: ['$totalUniqueCount.totalUniqueAmenities', 0] },
//     },
//   },
// ];
