import mongoose, { Document } from 'mongoose';

const Schema = mongoose.Schema;

const RoadSchema = new Schema({
  roadItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'road_items' }],
  saleRep: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

export interface IRoad {
  roadItems: string[],
  saleRep: string,
  start_date?: Date
}

export default mongoose.model<any>('road', RoadSchema);
