export interface IPointOfSalesType {
  id: string;
  _id?: string;
  name: string;
  shopLocation: string;
  location?: string
  shopOwner: string;
  owner?: string; 
  image?: string;
  contact: string | number;
  firstStat?: string | number;
  secondStat?: string | number;
  channelCluster: string | number;
  tradeChannel: string | number;
  category?: string | number;
  tasks?: any; 
  description?: string; 
  totalActivitiesDuration?: number;
  city: string;
  markerColor?: string;
  position: {
    lat: number;
    lng: number;
  };
}
