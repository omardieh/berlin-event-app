import { Schema, model } from 'mongoose';

const mapSchema = new Schema(
  {
    id: {
      type: String,
      unique: true,
    },
    properties: Schema.Types.Mixed,
  },
  {
    timestamps: true,
    collection: 'berlin-map',
  },
);

export const MapModel = model('berlin-map', mapSchema);
