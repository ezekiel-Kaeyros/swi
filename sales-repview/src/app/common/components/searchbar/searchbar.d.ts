export type Item = {
  id: number;
  name: string;
  shopLocation: string;
  shopOwner: string;
  contact: string;
  firstStat: string;
  secondStat: string;
};

export type SearchbarProps = {
  handleOnSelect?: any;
  handleOnSearch?: any;
  handleOnHover?: () => void;
  handleOnFocus?: () => void;
};
