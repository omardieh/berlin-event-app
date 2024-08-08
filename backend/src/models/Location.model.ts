import { Schema, model } from 'mongoose';

const locationSchema = new Schema(
  {},
  {
    timestamps: true,
    collection: 'locations',
  },
);

export const Location = model('Location', locationSchema);
