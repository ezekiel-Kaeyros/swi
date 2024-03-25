import mongoose, { Document } from 'mongoose';

const Schema = mongoose.Schema;

const RoadSchema = new Schema(
  {
    task: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Task',
      },
    ],
    sale_rep: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Salerep',
        },
      ],
  },
  {
    timestamps: true,
  }
);





export default mongoose.model<any>('Road', RoadSchema);
