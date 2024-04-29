export type ActivityFormValues = {
  id?: string,
  name: string;
  priority: string;
  channelCluster: string;
  tradeChannel: string;
  category: string;
  duration: number;
  frequency: number;
  description: string;
  points?: number | string;
};
export type FlowBuilderActivityTypeDesription = {
  description: string;
};
export type FlowBuilderActivityType = ActivityFormValues &
  FlowBuilderActivityTypeDesription;

export type ActivityFormProps = {
  handleCloseModal: () => void;
};
