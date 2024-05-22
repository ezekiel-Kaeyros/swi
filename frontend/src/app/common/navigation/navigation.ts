import HomeIcon from '../../../../public/icons/homeIcon.svg';
import RoutePlanningIcon from '../../../../public/icons/routePlanningIcon.svg';
import FieldOperationsIcon from '../../../../public/icons/fieldOperationsIcon.svg';
import SalesIcon from '../../../../public/icons/salesIcon.svg';
import InsightsIcon from '../../../../public/icons/insightsIcon.svg';
import FinanceIcon from '../../../../public/icons/financeIcon.svg';
import AdministratorIcon from '../../../../public/icons/administrationIcon.svg';
import SalesRepIcon from '../../../../public/icons/salesRepIcon.svg';
import PointOfSalesIcon from '../../../../public/icons/pointOfSale.svg';
import RealtimTrackingIcon from '../../../../public/icons/trackingicon.svg';
import ActivitiesIcon from '../../../../public/icons/activitiesIcon.svg';

export const navigation = [
  {
    id: 1,
    title: 'Home',
    url: '/',
    icon: HomeIcon,
  },
  {
    id: 2,
    title: 'Flow Builder',
    url: '/activity-flow-builder',
    icon: SalesRepIcon,
  },
  // {
  //   id: 3,
  //   title: 'Activities',
  //   url: '/activities',
  //   icon: ActivitiesIcon,
  // },
  {
    id: 4,
    title: 'Point of Sales',
    icon: PointOfSalesIcon,
    url: '/point-of-sales',
  },

  ,
  {
    id: 5,
    title: 'Realtime tracking',
    icon: RealtimTrackingIcon,
    url: '/realtime-tracking',
  },
  {
    id: 6,
    title: 'Route Preparation',
    icon: RoutePlanningIcon,
    url: '/route-preparation',
    submenus: [
      // {
      //   subTitle: 'Route Preparation',
      //   url: '/route-preparation',
      // },
      // {
      //   subTitle: 'Route Optimization',
      //   url: '#',
      // },
      // {
      //   subTitle: 'Dynamic Tour',
      //   url: '#',
      // },
    ],
  },
  // {
  //   id: 7,
  //   title: 'Sales Rep view',
  //   icon: FieldOperationsIcon,
  //   url: '/sales-rep-view',
  // },
  // {
  //   id: 8,
  //   title: 'Sales',
  //   icon: SalesIcon,
  //   submenus: [
  //     {
  //       subTitle: 'Sales Provisioning',
  //       url: '#',
  //     },
  //     {
  //       subTitle: 'Order Generation',
  //       url: '#',
  //     },
  //     {
  //       subTitle: 'Customer Registration',
  //       url: '#',
  //     },
  //   ],
  // },
  // {
  //   id: 9,
  //   title: 'Insights',
  //   icon: InsightsIcon,
  //   submenus: [
  //     {
  //       subTitle: 'Intelligence',
  //       url: '#',
  //     },
  //     {
  //       subTitle: 'Insight Collection',
  //       url: '#',
  //     },
  //     {
  //       subTitle: 'Potential Identification',
  //       url: '#',
  //     },
  //     {
  //       subTitle: 'Product Visibility',
  //       url: '#',
  //     },
  //   ],
  // },
  // {
  //   id: 10,
  //   title: 'Finance',
  //   icon: FinanceIcon,
  //   submenus: [
  //     {
  //       subTitle: 'Invoice Generation',
  //       url: '#',
  //     },
  //     {
  //       subTitle: 'Invoice Printing',
  //       url: '#',
  //     },
  //     {
  //       subTitle: 'Payment',
  //       url: '#',
  //     },
  //   ],
  // },
  // {
  //   id: 11,
  //   title: 'Administration',
  //   icon: AdministratorIcon,
  //   submenus: [
  //     {
  //       subTitle: 'Operation Dashboard',
  //       url: '#',
  //     },
  //     {
  //       subTitle: 'Sales Dashboard',
  //       url: '#',
  //     },
  //     {
  //       subTitle: 'Competitors Dashboard',
  //       url: '#',
  //     },
  //   ],
  // },
  ,
  ,
];
