import mongoose from "mongoose";




const Schema =  mongoose.Schema;

export const activitiesSchema = new Schema({

    name: {type: String, required: true},
    description: {type: String, required: true},
    activitieItems: [{type: Schema.Types.ObjectId, ref: 'ActivitieItem'}],

})


export interface IActivity {
    name: string;
    description: string;
  
  }


export default mongoose.model<any>('Activities', activitiesSchema)