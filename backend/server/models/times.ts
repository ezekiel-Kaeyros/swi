import mongoose, { Document } from "mongoose";

const Schema = mongoose.Schema;

export const travelTimeSchema = new Schema({
    time: {type: String, required: true},
    id_company: { type: mongoose.Schema.Types.String, ref: 'Company', required: true },

}, {
    timestamps: true
    
})


 export interface ITravelTime {
    id?: string;
    id_company?: string;
    time?: string;
}

export default mongoose.model<any>('TravelTime', travelTimeSchema)