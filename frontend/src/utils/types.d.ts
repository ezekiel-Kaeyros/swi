export interface IPointOfSalesType {
  id: number;
  name: string;
  shopLocation: string;
  shopOwner: string;
  image?: string;
  contact: string | number;
  firstStat?: string | number;
  secondStat?: string | number;
  channelCluster: string | number;
  tradeChannel: string | number;
  category?: string | number;
  tasks?: any;
  totalActivitiesDuration?: number;
  city: string;
  markerColor?: string;
  position: {
    lat: number;
    lng: number;
  };
}
