import { ReactNode } from 'react';

export type SlideInComponentProps = {
  title: string;
  onClose: () => void;
  isOpen: boolean;
  children: ReactNode;
};
