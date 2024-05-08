import { ReactNode } from 'react';

export type NavigationItemType = {
  title: string;
  type: 'home' | 'settings' | 'statistic' | 'maps';
  isCurrent: boolean;
  link: string;
};
