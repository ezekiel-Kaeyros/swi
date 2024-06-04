import { category } from '../utils/category';
import ActivitiesItem from './ActivitiItem';
import { Category } from './Category';
import { TradeChannel } from './TradeChannel';

type PointOfSales = {
  _id: string;
  owner: string;
  longitude: number;
  latitude: number;
  name: string;
  location: string;
  city: string;
  firstStat: string;
  secondStat: string;
  channelCluster: Category;
  tradeChannel: TradeChannel;
  activityItems: ActivitiesItem;
  category: Category;
  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
};
export default PointOfSales;
