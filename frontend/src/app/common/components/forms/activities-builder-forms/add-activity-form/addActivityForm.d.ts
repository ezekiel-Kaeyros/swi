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
  id?: string;
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
  id?: string;
  dataToUpdate?: ActivityFormValuesFrontEnd; 
};
