import mongoose, { Document } from "mongoose";
const Schema =  mongoose.Schema;

export const channelClusterSchema = new Schema({
    
    name: {type: String, required: true},
    id_company: [{type: Schema.Types.String,
        ref: 'Company'} ],
    trade_channels_id: [{ type: Schema.Types.ObjectId, ref: 'TradeChannel' }],

}, {
    timestamps: true
})

export interface IChannelCluster {
    id?: string;
    name?: string;
    id_company?: string;
    trade_channels_id?: any[];
}

export default mongoose.model<any>('ChannelCluster', channelClusterSchema)