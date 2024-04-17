import mongoose from "mongoose";

const Schema =  mongoose.Schema;

export const companySchema = new Schema({
    name: {type: String, required: true},
    
}, {
    timestamps: true
}) 

export interface ICompany{
    id?: string;
    name?: string;
}

export default mongoose.model<any>('Company', companySchema);