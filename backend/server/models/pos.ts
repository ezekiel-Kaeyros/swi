import mongoose, { Document } from 'mongoose';

const Schema = mongoose.Schema;

const PosSchema = new Schema(
  {
    owner: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ], 
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
      required: false,
    },
    description: {
      type: String,
      trim: true,
      required: false,
    },
    phone: {
      type: Number,
      trim: true,
      required: false,
    },
    location: {
      type: String,
      trim: true,
      required: false,
    },
    image: {
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
  name?: string;
  description?: string;
  image?: string;
  location?: string;
  owner?: string;
  phone?: number;
}

export default mongoose.model<any>('Pos', PosSchema);
