import Activitie from './Activitie';
import { Category } from './Category';
import { TradeChannel } from './TradeChannel';

type ActivitiesItem = {
  _id: string;
  priority: string;
  channelClusters: Category[];
  tradeChannels: TradeChannel[];
  activitie: Activitie;
  categories: Category[];
  time: number;
  frequency: number;
  __v?: number;
};

export default ActivitiesItem;
