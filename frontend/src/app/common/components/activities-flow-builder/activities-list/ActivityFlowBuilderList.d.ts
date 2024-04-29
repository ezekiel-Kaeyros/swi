export interface FlowBuilderActivityList {
  id: number;
  ActvityName: string;
  time: string;
  repeat: string;
  description: string;
  status: 'high' | 'medium' | 'low';
}

// export type List = DataElement[];
export type ActivityFlowBuilderListProps = {
  handleCloseModal: () => void;
};
