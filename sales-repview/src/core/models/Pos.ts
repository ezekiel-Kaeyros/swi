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
  channelCluster: string;
  tradeChannel: string;
  category: string;
  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
};
export default PointOfSales;
