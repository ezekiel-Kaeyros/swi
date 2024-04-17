export type UserCardProps = {
  id: number;
  image?: string;
  name?: string;
  email?: string;
  handleSelect?: (id: number) => void | null;
};
