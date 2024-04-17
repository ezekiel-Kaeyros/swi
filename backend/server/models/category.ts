import mongoose from "mongoose";

const Schema =  mongoose.Schema;

export const categorySchema = new Schema({
    name: {type: String, required: true},
    id_company: [{ type: mongoose.Schema.Types.String, ref: 'Company', required: true } ],
    trade_chanel_id: { type: Schema.Types.ObjectId, ref: 'TradeChannel', required: true },
    
}, {
    timestamps: true
}) 

export interface ICategory {
    id?: string;
    name?: string;
    id_company?: string;
    trade_chanel_id?: string;
}

export default mongoose.model<any>('Category', categorySchema);