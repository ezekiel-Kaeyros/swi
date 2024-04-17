export type AddTradeChannelFormValues = {
  tradeChannelName: string;
};

export type AddTradeChannelProps = {
  handleCloseModal: () => void;
  channelClusterId: string | number;
};
