import mongoose, { Document } from 'mongoose';

const Schema = mongoose.Schema;

const PosSchema = new Schema(
  {
    longitude: {
      type: String,
      trim: true,
      required: true,
    },
    latitude: {
      type: String,
      trim: true,
      required: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export interface IPos {
  id?: string;
  longitude: string;
  latitude: string;
  name: string;
  description?: string;
}

export default mongoose.model<any>('Pos', PosSchema);
