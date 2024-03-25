import mongoose, { Document } from 'mongoose';

const Schema = mongoose.Schema;

const TaskSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: false,
    }
  },
  {
    timestamps: true,
  }
);

export interface ITask extends Document {
  title: string;
  description?: string;
}

export default mongoose.model<ITask>('Task', TaskSchema);
