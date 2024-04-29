export type ActivityFormValues = {
  name: string;
  channelCluster: string;
  tradeChannel: string;
  category: string;
  priority: string;
  time?: number; 
  frequency: number;
  points?: number | string; 
  description: string;
  duration: number;
};

export type ActivityFormValuesFrontEnd = {
  name: string;
  channelCluster?: string[];
  tradeChannel?: string[];
  category?: string[];
  priority?: string;
  time?: number; 
  frequency: number;
  points?: number | string; 
  description?: string;
  duration: number;
};

export type ActivityFormProps = {
  handleCloseModal: () => void;
  shouldUpdate?: boolean; 
  dataToUpdate?: ActivityFormValuesFrontEnd; 
};
