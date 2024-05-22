import mongoose, { Document } from 'mongoose';

const Schema = mongoose.Schema;

const PosSchema = new Schema(
  {
    owner:
      {
        type: String,
        trim: true,
        required: false,
      }, 
    longitude: {
      type: Number,
      trim: true,
      required: true,
    },
    latitude: {
      type: Number,
      trim: true,
      required: true,
    },
    name: {
      type: String,
      trim: true,
      required: false,
    },
    image: {
      type: String,
      trim: true,
      required: false,
    },
    contact: {
      type: Number,
      trim: true,
      required: false,
    },
    location: {
      type: String,
      trim: true,
      required: false,
    },
    city: {
      type: String,
      trim: true,
      required: false,
    },
    firstStat: {
      type: String,
      trim: true,
      required: false,
    },
    secondStat: {
      type: String,
      trim: true,
      required: false,
    },
    channelCluster: { type: Schema.Types.ObjectId, ref: 'ChannelCluster' },
    tradeChannel: { type: Schema.Types.ObjectId, ref: 'TradeChannel' },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    id_company: {type: Schema.Types.String, required: false, ref: 'Company'}, 
    totalActivitiesDuration: { type: Number, required: false },
  },
  {
    timestamps: true,
  }
);

export interface IPos {
  _id?: string; 
  id?: string;
  longitude: string;
  latitude: string;
  name: string;
  description?: string;
  image?: string;
  location?: string;
  owner?: string;
  phone?: number;
  city?: string;
  firstStat?: string;
  secondStat?: string;
  channelCluster?: string;
  tradeChannel?: string;
  category?: string;
  id_company?: string; 
  totalActivitiesDuration?: number;
}

export default mongoose.model<any>('Pos', PosSchema);
