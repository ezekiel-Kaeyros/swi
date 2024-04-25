import { PositionType } from "@/redux/features/types";

export type AddTradeChannelFormValues = {
  tradeChannelName: string;
};

export type AddTradeChannelProps = {
  handleCloseModal: () => void; 
  title?: string; 
  shouldUpdate?: boolean; 
  existingData?: string; 
  channelClusterId?: string | number;
  position?: PositionType; 
  tcID?: number; 
  tradeChannelId?: string | number; 
  id?: number
};
