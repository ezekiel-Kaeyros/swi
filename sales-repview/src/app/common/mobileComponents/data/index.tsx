import RoutesSvg from '../../mobileComponents/icons/homeSvgIcons/routes.svg';
import Rock from '../../mobileComponents/icons/homeSvgIcons/youRock.svg';
import Statitic from '../../mobileComponents/icons/homeSvgIcons/statitic.svg';
import { NavigationItemType } from '../types/NavigationItemType';
import { CardItem } from '../types/cardItem';
import { SalesRepActivities } from '../types/SalesRepActivities';

const navbarMenuItems: NavigationItemType[] = [
  {
    type: 'home',
    isCurrent: true,
    title: 'Home',
    link: '',
  },
  {
    type: 'maps',
    isCurrent: false,
    title: 'Maps',
    link: 'maps',
  },
  {
    type: 'statistic',
    isCurrent: false,
    title: 'Statistics',
    link: 'statistic',
  },
  {
    type: 'settings',
    isCurrent: false,
    title: 'Settings',
    link: 'settings',
  },
];

const homeCardItemsList: CardItem[] = [
  {
    description: 'Visit your routes and start your journey now',
    icon: RoutesSvg,
    link: {
      name: 'See routes',
      href: 'maps',
    },
    title: 'Routes',
  },
  {
    description: 'Get full insights of your accomplishments',
    icon: Rock,
    link: {
      name: 'See page',
      href: 'settings',
    },
    title: 'You rock',
  },
  {
    description: 'See your weekly progress in real time',
    icon: Statitic,
    link: {
      name: 'Go to stats',
      href: 'statistic',
    },
    title: 'Statistics',
  },
];

const SalesRepActivitiesList: SalesRepActivities[] = [
  {
    title: 'Check Inventory',
    description: 'Check inventory levels and restock shelves ',
    status: 'start',
    step: '01',
  },
  {
    title: 'Follow up',
    description:
      'with customers who expressed interest in specific products or promotions.',
    status: 'start',
    step: '02',
  },
  {
    title: 'Follow up',
    description:
      'with customers who expressed interest in specific products or promotions.',
    status: 'start',
    step: '03',
  },
  {
    title: 'Follow up',
    description:
      'with customers who expressed interest in specific products or promotions.',
    status: 'start',
    step: '04',
  },
  {
    title: 'Follow up',
    description:
      'with customers who expressed interest in specific products or promotions.',
    status: 'expired',
    step: '05',
  },
];

const SalesRepAllActivitiesList: SalesRepActivities[] = [
  {
    title: 'Check Inventory',
    description: 'Check inventory levels and restock shelves ',
    status: 'start',
    step: '01',
  },

  {
    title: 'Check Inventory',
    description: 'Check inventory levels and restock shelves ',
    status: 'start',
    step: '01',
  },

  {
    title: 'Check Inventory',
    description: 'Check inventory levels and restock shelves ',
    status: 'start',
    step: '01',
  },

  {
    title: 'Check Inventory',
    description: 'Check inventory levels and restock shelves ',
    status: 'start',
    step: '01',
  },
  {
    title: 'Check Inventory',
    description: 'Check inventory levels and restock shelves ',
    status: 'start',
    step: '01',
  },

  {
    title: 'Check Inventory',
    description: 'Check inventory levels and restock shelves ',
    status: 'start',
    step: '01',
  },
  {
    title: 'Check Inventory',
    description: 'Check inventory levels and restock shelves ',
    status: 'start',
    step: '01',
  },
  {
    title: 'Check Inventory',
    description: 'Check inventory levels and restock shelves ',
    status: 'start',
    step: '01',
  },
  {
    title: 'Check Inventory',
    description: 'Check inventory levels and restock shelves ',
    status: 'start',
    step: '01',
  },
  {
    title: 'Check Inventory',
    description: 'Check inventory levels and restock shelves ',
    status: 'start',
    step: '01',
  },
  {
    title: 'Check Inventory',
    description: 'Check inventory levels and restock shelves ',
    status: 'start',
    step: '01',
  },
];
export {
  navbarMenuItems,
  homeCardItemsList,
  SalesRepActivitiesList,
  SalesRepAllActivitiesList,
};
