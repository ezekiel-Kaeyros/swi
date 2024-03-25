import mongoose, { Document } from 'mongoose';

const Schema = mongoose.Schema;

const CommentSchema = new Schema(
  {
    task: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Task',
      },
    ],
    author: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
    title: {
      type: String,
      trim: true,
      required: true,
    },
    content: {
        type: String,
        trim: true,
        required: true,
      },
    
  },
  {
    timestamps: true,
  }
);

export interface IComment extends Document {
  task: string;
  author: string;
  title: string;
  content: string;
  
}


export default mongoose.model<IComment>('Comment', CommentSchema);
