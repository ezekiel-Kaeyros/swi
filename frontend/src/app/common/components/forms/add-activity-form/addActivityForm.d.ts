export type ActivityFormValues = {
  name: string;
  priority: string;
  channelCluster: string;
  tradeChannel: string;
  category: string;
  duration: number;
  frequency: number;
  description: string;
};

export type ActivityFormProps = {
  handleCloseModal: () => void;
};
