import { ReactNode } from 'react';

export type CardItem = {
  title: string;
  icon: any;
  description: string;
  link: {
    name: string;
    href: string;
  };
};
