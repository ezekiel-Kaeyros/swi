import ActivitiesItem from './ActivitiItem';
import PointOfSales from './Pos';
import { IUser } from './User';

export type TradeChannel = {
  _id: string;
  name: string;
  pos: PointOfSales[];
  saleRep: IUser;
  activities_items: ActivitiesItem[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};
