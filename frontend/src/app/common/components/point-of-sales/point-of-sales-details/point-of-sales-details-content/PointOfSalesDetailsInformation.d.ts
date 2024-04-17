export type PointOfSalesDetailsInformationProps = {
  name: string;
  shopLocation: string;
  image?: string;
  shopOwner: string;
  contact: string;
  salesAmount?: { amount: string; stat: string };
  recentSalesAgent: {
    id: string | number;
    picture?: string;
    name?: string;
    email?: string;
  } | null;
};
