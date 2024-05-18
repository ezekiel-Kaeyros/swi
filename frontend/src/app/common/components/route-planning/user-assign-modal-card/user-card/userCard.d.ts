export type UserCardProps = {
  id: number;
  image?: string;
  emailAddress?: string; 
  salesName?: string; 
  name?: string;
  email?: string;
  handleSelect?: (id: number) => void | null;
};
