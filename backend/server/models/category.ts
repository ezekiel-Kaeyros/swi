import mongoose from "mongoose";

const Schema =  mongoose.Schema;

export const categorySchema = new Schema({
    name: {type: String, required: false},
    description: [{type: String, required: true}],
    id_company: [{ type: mongoose.Schema.Types.String, ref: 'Company', required: true } ],
    trade_chanel_id: { type: Schema.Types.ObjectId, ref: 'TradeChannel', required: true },
    
}, {
    timestamps: true
}) 

export interface ICategory {
    _id?: string; 
    id?: string;
    name?: string;
    id_company?: string;
    trade_chanel_id?: string;
    description?: any[]
}

export default mongoose.model<any>('Category', categorySchema);