import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const routPathSchema = new Schema({
    name: {type: String, required: false},
    saleRep: { type: Schema.Types.ObjectId, ref: 'SaleRep' }, 
    pointOfSales: [{type: Schema.Types.ObjectId, ref: 'Pos'}], 
    activitieItems: [{type: Schema.Types.ObjectId, ref: 'ActivitieItem'}],
}, { timestamps: true });

export interface IPath {
    id?: string; 
    name?: string,
    saleRep?: string,
    pointOfSales?: string[], 
    activitieItems?: string[]
}

export default mongoose.model<any>('RoutPath', routPathSchema);
