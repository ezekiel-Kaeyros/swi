import mongoose from "mongoose";

const Schema =  mongoose.Schema;

export const activitiesSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    activitieItems: [{type: Schema.Types.ObjectId, ref: 'ActivitieItem'}], 
    id_company: {type: Schema.Types.String, required: false, ref: 'Company'}, 
})


export interface IActivity {
  name: string;
  description: string;
  id_company: string; 
}


export default mongoose.model<any>('Activities', activitiesSchema)