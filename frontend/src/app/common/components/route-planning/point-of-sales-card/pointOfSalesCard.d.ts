import { ReactNode } from 'react';

export type PointOfSalesCardProps = {
  id: number | string;
  shopName: string;
  shopOwner: string;
  children?: ReactNode;
  contact: string;
  shopLocation: string;
  firstStatIcon?: string;
  firstStat: string;
  secondStat: string;
  secondStatIcon?: string;
  category: string;
  channelCluster: string | number;
  tradeChannel: string | number;
  totalActivitiesDuration?: number | undefined;
  handleSelected?: (id: number | string) => void;
  isRoutePlanning: boolean;
};
