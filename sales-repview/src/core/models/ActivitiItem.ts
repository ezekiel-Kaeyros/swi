import Activitie from './Activitie';
import { Category } from './Category';
import { TradeChannel } from './TradeChannel';

type ActivitiesItem = {
  _id: string;
  priority: string;
  channelClusters: Category[];
  tradeChannels: TradeChannel[];
  activities: Activitie;
  activityItem: ActivitiesItem;
  categories: string[];
  time: number;
  frequency: number;
  status: string;
  __v?: number;
};

export default ActivitiesItem;
