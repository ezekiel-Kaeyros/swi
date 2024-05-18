import { updateTasksInPointOfSales } from "@/redux/utils";

export interface ChannelCluster {
  id: string;
  name: string;
}

export interface IPointOfSalesType {
  tasks: any;
  description: any;
  totalActivitiesDuration: any;
  id: string; 
  _id?: string; 
  name: string;
  shopLocation: string; 
  location?: string;
  shopOwner?: string;
  owner?: string;
  contact: string;
  firstStat: string;
  secondStat: string;
  channelCluster: ChannelCluster[] | string; // Use ChannelCluster type here
  tradeChannel: string; 
  channeCName?: string; 
  category: number | string;
  city: string; 
  selected?: boolean; 
  markerColor: string; 
  time?: number;
  position: {
    lat: number;
    lng: number;
  };
}

export interface PointOfSaleChannel {
  pointOfSaleId: string;
  channelId: string;
}

export interface Route {
  id: string;
  routeName: string;
  activitiesDuration: string;
  pointOfSales: PointOfSale[];
  salesRepresentatives: string[];
}
