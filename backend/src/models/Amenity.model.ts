import { Schema, model } from 'mongoose';

const amenitySchema = new Schema(
  {
    count: Number,
    amenity: String,
  },
  {
    timestamps: true,
    collection: 'amenities',
  },
);

export const Amenity = model('Amenity', amenitySchema);
