export type AddSubCategoryProps = {
  clusterId?: string | number;
  tradeChannelId?: string | number; 
  editToggle?: boolean, 
  dataTtoEdit?: string, 
  catID?: number | string
  handleCloseModal: () => void;
};

export type AddSubCategoryFormValues = {
  name: string;
  description: string[];
};
