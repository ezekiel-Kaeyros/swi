import mongoose, { Document } from 'mongoose';

const Schema = mongoose.Schema;

const RoleSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
  
  
);

export interface IRole extends Document {
  name: string;
}



export default mongoose.model<IRole>('Role', RoleSchema);
