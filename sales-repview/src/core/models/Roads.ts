import ActivitiesItem from './ActivitiItem';
import PointOfSales from './Pos';
import RoadsItem from './RoadsItem';
import { IUser } from './User';

export type Road = {
  _id: string;
  name: string;
  saleRep: IUser;
  roadItems: RoadsItem[];
  id_company: string;
  execution_date: string;
  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
};
export default Road;
