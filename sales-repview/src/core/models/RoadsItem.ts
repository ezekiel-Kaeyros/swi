import ActivitiesItem from './ActivitiItem';
import PointOfSales from './Pos';
import { IUser } from './User';

export type RoadsItem = {
  _id: string;
  taskIds: ActivitiesItem[];
  roadId: string;
  posId: PointOfSales;
  id_company: string;
  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
};
export default RoadsItem;
