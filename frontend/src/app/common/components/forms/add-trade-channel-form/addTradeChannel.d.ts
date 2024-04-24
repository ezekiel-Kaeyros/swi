export type AddTradeChannelFormValues = {
  tradeChannelName: string;
};

export type AddTradeChannelProps = {
  handleCloseModal: () => void; 
  title?: string; 
  shouldUpdate?: boolean; 
  existingData?: string; 
  channelClusterId: string | number;
};
