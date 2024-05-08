export type SalesRepActivities = {
  step: any;
  title: string;
  description: string;
  status: 'start' | 'expired' | 'done';
  displayRightSide?: boolean;
};
