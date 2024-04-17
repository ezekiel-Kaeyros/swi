export type AddSubCategoryProps = {
  clusterId: string | number;
  tradeChannelId: string | number;
  handleCloseModal: () => void;
};

export type AddSubCategoryFormValues = {
  name: string;
  description: string[];
};
