export type CreateChannelClusterValues = {
  categoryName: string;
  serviceModel: string;
  serviceRole: string;
  estimatedTurnOverPerMonth: number;
  color: string;
};

export type CreateChannelClusterProps = {
  handleCloseModal?: () => void;
};
