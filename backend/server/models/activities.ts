import mongoose from "mongoose";




const Schema =  mongoose.Schema;

export const activitiesSchema = new Schema({

    name: {type: String, required: true},
    priority: {type: Number, required: true},
    colors: {type: String, required: true},
    description: {type: String, required: true},
    channelClusters: [{type: Schema.Types.ObjectId, ref: 'ChannelCluster'}],
    tradeChannels: [{type: Schema.Types.ObjectId, ref: 'TradeChannel'}],
    categories: [{type: Schema.Types.ObjectId, ref: 'Category'}],
    time: { type: Number, required: true }, // Peut être calculé dynamiquement
    frequency: { type: Number, required: true }
    


})


export interface IActivity {
    name: string;
    priority: string;
    colors: string[];
    description: string;
    channelClusters: string;
    tradeChannels: string;
    categories: string;
    time: number; // Temps fixe ou à calculer en fonction des canaux, clusters et catégories
    frequency: number; // Fréquence fixe ou à calculer en fonction des canaux, clusters et catégories
  }


export default mongoose.model<any>('Activities', activitiesSchema)