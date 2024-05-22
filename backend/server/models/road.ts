import mongoose, { Document } from 'mongoose';

const Schema = mongoose.Schema;

const RoadSchema = new Schema({
  name: {type: String, required: false},
  // roadItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'road_items', require: false }],
  pos: [{ type: Schema.Types.ObjectId, ref: 'Pos' }],
  saleRep: { type: Schema.Types.ObjectId, ref: 'SaleRep' }, 
  activities_items: [{ type: Schema.Types.ObjectId, ref: 'ActivitieItem' }], 
  id_company: {type: Schema.Types.String, required: false, ref: 'Company'}, 
}, { timestamps: true });

export interface IRoad {
  id?: string; 
  name?: string,
  activities_items: string[],
  saleRep: string,
  pos?: string [], 
  id_company: string; 
  // roadItems?: string[]; 
}

export default mongoose.model<any>('road', RoadSchema);
