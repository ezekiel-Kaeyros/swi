export type AddChannelClusterFormValues = {
  name: string;
  color: string; 
  company?: string; 
  id?: number | string;
};

export type AddChannelClusterFormProps = {
  handleCloseModal: () => void;
  channelClusterIdForUpdate?: any; 
  title?: string; 
  // channelClusterName?: string; 
  shouldUpdate?: boolean; 
  existingData?: any;
};
