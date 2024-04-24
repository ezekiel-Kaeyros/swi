export type AddChannelClusterFormValues = {
  name: string;
  color: string; 
  company?: string; 
};

export type AddChannelClusterFormProps = {
  handleCloseModal: () => void;
  channelClusterIdForUpdate?: any; 
  title?: string; 
  // channelClusterName?: string; 
  shouldUpdate?: boolean; 
  existingData?: any;
};
