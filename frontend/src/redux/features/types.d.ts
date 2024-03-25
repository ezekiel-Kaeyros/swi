export interface IChannelCluster {
  id: number | string;
  color?: { hex: string };
  name: string;
  tradeChannel?: any[];
}

export interface IActivity {
  id: number | string;
  name: string;
  frequency: number;
  duration: number;
  channelCluster: string | number;
  tradeChannel: string | number;
  category: string | number;
  status: boolean;
  priority?: string;
  description?: string;
}
