import mongoose from "mongoose";
import { StatusRoadItem } from "../utils/constence";

const Schema =  mongoose.Schema;

export const activitieItemSchema = new Schema({
    priority: {type: String, required: true},
    colors: {type: String, required: false},
    channelClusters: [{type: Schema.Types.ObjectId, ref: 'ChannelCluster'}],
    tradeChannels: [{type: Schema.Types.ObjectId, ref: 'TradeChannel'}],
    activitie: {type: Schema.Types.ObjectId, ref: 'Activities'},
    categories: [{type: Schema.Types.ObjectId, ref: 'Category'}],
    time: { type: Number, required: true }, // Peut être calculé dynamiquement
    frequency: { type: Number, required: true },
    status: { type: String, required: false, default: StatusRoadItem.PENDING },
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
    status?: string;
  }


export default mongoose.model<any>('ActivitieItem', activitieItemSchema)