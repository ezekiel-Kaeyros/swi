import mongoose from "mongoose";

const Schema =  mongoose.Schema;

export const activitieItemSchema = new Schema({
    priority: {type: Number, required: true},
    colors: {type: String, required: true},
    channelClusters: [{type: Schema.Types.ObjectId, ref: 'ChannelCluster'}],
    tradeChannels: [{type: Schema.Types.ObjectId, ref: 'TradeChannel'}],
    activitie: {type: Schema.Types.ObjectId, ref: 'Activities'},
    categories: [{type: Schema.Types.ObjectId, ref: 'Category'}],
    time: { type: Number, required: true }, // Peut être calculé dynamiquement
    frequency: { type: Number, required: true }
})


export interface IActivityItem {
    priority: string;
    colors: string[];
    channelClusters: string;
    tradeChannels: string;
    activitie:string;
    categories: string;
    time: number; // Temps fixe ou à calculer en fonction des canaux, clusters et catégories
    frequency: number; // Fréquence fixe ou à calculer en fonction des canaux, clusters et catégories
  }


export default mongoose.model<any>('ActivitieItem', activitieItemSchema)