import mongoose, { Document } from 'mongoose';
import { StatusRoadItem } from '../utils/constence';

const Schema = mongoose.Schema;

const RoadItemSchema = new Schema({
    taskIds: [
        {
          id: { type: mongoose.Schema.Types.ObjectId, ref: 'ActivitieItem', required: true },
          status: { type: String, required: false, default: StatusRoadItem.PENDING },
        },
    ],
    roadId: { type: mongoose.Schema.Types.ObjectId, ref: 'road', required: true },
    posId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pos', required: true },
    status: { type: String, required: false },
}, { timestamps: true});

export interface IRoadItem {
    _id?: string; 
    taskIds: {id: string, statut?: string}[];
    roadId: string; 
    posId: string;
    status?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export default mongoose.model<any>('road_items', RoadItemSchema);





// import mongoose, { Document } from 'mongoose';
// import { StatusRoadItem } from '../utils/constence';

// const Schema = mongoose.Schema;

// const RoadItemSchema = new Schema({
//     taskIds: [
//         {
//           id: { type: mongoose.Schema.Types.ObjectId, ref: 'Task', required: true },
//           status: { type: String, required: true, default: StatusRoadItem.PENDING },
//         },
//     ],
//     posId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pos', required: true },
//     status: { type: String, required: false },
// }, { timestamps: true});

// export interface IRoadItem {
//     taskIds: {id: string, statut?: string}[];
//     posId: string;
//     status?: string;
//     createdAt?: Date;
//     updatedAt?: Date;
// }

// export default mongoose.model<any>('road_items', RoadItemSchema);
