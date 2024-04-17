import mongoose from "mongoose";

const Schema =  mongoose.Schema;

export const tradeChannelSchema = new Schema({
    name: {type: String, required: true},
    id_company: { type: mongoose.Schema.Types.String, ref: 'Company' },
    channel_cluster_id: { type: Schema.Types.ObjectId, ref: 'ChannelCluster' },
    categories_id: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
}, {
    timestamps: true
}) 

export interface ITradeChannel {
    id?: string;
    name?: string;
    id_company?: string;
    channel_cluster_id?: string;
    categories_id?: string[];
}

export default mongoose.model<any>('TradeChannel', tradeChannelSchema);