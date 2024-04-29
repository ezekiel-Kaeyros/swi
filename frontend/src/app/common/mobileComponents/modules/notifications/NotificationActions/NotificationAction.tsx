'use client';
import React from 'react';
import { NotificationItemType } from './dataAction';
import NotificationctionsItem from './NotificationctionsItem';
import { motion } from 'framer-motion';
import SlideDownToUp from '../../../components/slideDownToUp';

function NotificationAction() {
  const dataActionlist: NotificationItemType[] = [
    {
      description: 'You have been assigned a new route',
      title: ' New Route',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.88003 4.59997C8.08003 1.13997 2.87002 1.12997 2.07002 4.59997C1.60002 6.62997 2.89003 8.34997 4.01003 9.41997C4.83003 10.19 6.12003 10.19 6.94003 9.41997C8.06003 8.34997 9.34003 6.62997 8.88003 4.59997ZM5.51003 6.19997C4.96003 6.19997 4.51003 5.74997 4.51003 5.19997C4.51003 4.64997 4.95003 4.19997 5.50003 4.19997H5.51003C6.07003 4.19997 6.51003 4.64997 6.51003 5.19997C6.51003 5.74997 6.07003 6.19997 5.51003 6.19997Z"
            fill="#BABABA"
          />
          <path
            d="M21.91 16.6C21.11 13.14 15.88 13.13 15.07 16.6C14.6 18.63 15.89 20.35 17.02 21.42C17.84 22.19 19.14 22.19 19.96 21.42C21.09 20.35 22.38 18.63 21.91 16.6ZM18.53 18.2C17.98 18.2 17.53 17.75 17.53 17.2C17.53 16.65 17.97 16.2 18.52 16.2H18.53C19.08 16.2 19.53 16.65 19.53 17.2C19.53 17.75 19.08 18.2 18.53 18.2Z"
            fill="#BABABA"
          />
          <path
            d="M11.9999 19.75H9.31994C8.15994 19.75 7.14994 19.05 6.74994 17.97C6.33994 16.89 6.63994 15.7 7.50994 14.93L15.4999 7.94C15.9799 7.52 15.9899 6.95 15.8499 6.56C15.6999 6.17 15.3199 5.75 14.6799 5.75H11.9999C11.5899 5.75 11.2499 5.41 11.2499 5C11.2499 4.59 11.5899 4.25 11.9999 4.25H14.6799C15.8399 4.25 16.8499 4.95 17.2499 6.03C17.6599 7.11 17.3599 8.3 16.4899 9.07L8.49994 16.06C8.01994 16.48 8.00994 17.05 8.14994 17.44C8.29994 17.83 8.67994 18.25 9.31994 18.25H11.9999C12.4099 18.25 12.7499 18.59 12.7499 19C12.7499 19.41 12.4099 19.75 11.9999 19.75Z"
            fill="#BABABA"
          />
        </svg>
      ),
      link: '#',
      isReaded: false,
    },
    {
      description: 'Your weekly statistics are available',
      title: 'Activity',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM17.26 9.96L14.95 12.94C14.66 13.31 14.25 13.55 13.78 13.6C13.31 13.66 12.85 13.53 12.48 13.24L10.65 11.8C10.58 11.74 10.5 11.74 10.46 11.75C10.42 11.75 10.35 11.77 10.29 11.85L7.91 14.94C7.76 15.13 7.54 15.23 7.32 15.23C7.16 15.23 7 15.18 6.86 15.07C6.53 14.82 6.47 14.35 6.72 14.02L9.1 10.93C9.39 10.56 9.8 10.32 10.27 10.26C10.73 10.2 11.2 10.33 11.57 10.62L13.4 12.06C13.47 12.12 13.54 12.12 13.59 12.11C13.63 12.11 13.7 12.09 13.76 12.01L16.07 9.03C16.32 8.7 16.8 8.64 17.12 8.9C17.45 9.17 17.51 9.64 17.26 9.96Z"
            fill="#BABABA"
          />
        </svg>
      ),
      link: '#',
      isReaded: false,
    },
    {
      description: 'Finish your profile setup to access your routes',
      title: 'Setup Profile',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z"
            fill="#BABABA"
          />
          <path
            d="M17.08 14.15C14.29 12.29 9.73996 12.29 6.92996 14.15C5.65996 15 4.95996 16.15 4.95996 17.38C4.95996 18.61 5.65996 19.75 6.91996 20.59C8.31996 21.53 10.16 22 12 22C13.84 22 15.68 21.53 17.08 20.59C18.34 19.74 19.04 18.6 19.04 17.36C19.03 16.13 18.34 14.99 17.08 14.15Z"
            fill="#BABABA"
          />
        </svg>
      ),
      link: '#',
      isReaded: false,
    },
    {
      description: 'Welcome on Swivy',
      title: 'Welcome Message',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM8.5 6.38C9.53 6.38 10.38 7.22 10.38 8.26C10.38 9.3 9.54 10.14 8.5 10.14C7.46 10.14 6.62 9.28 6.62 8.25C6.62 7.22 7.47 6.38 8.5 6.38ZM12 19.08C9.31 19.08 7.12 16.89 7.12 14.2C7.12 13.5 7.69 12.92 8.39 12.92H15.59C16.29 12.92 16.86 13.49 16.86 14.2C16.88 16.89 14.69 19.08 12 19.08ZM15.5 10.12C14.47 10.12 13.62 9.28 13.62 8.24C13.62 7.2 14.46 6.36 15.5 6.36C16.54 6.36 17.38 7.2 17.38 8.24C17.38 9.28 16.53 10.12 15.5 10.12Z"
            fill="#BABABA"
          />
        </svg>
      ),
      link: '#',
      isReaded: true,
    },
  ];
  return (
    <motion.div
      variants={{
        visible: {
          transition: {
            delayChildren: 0.2,
            staggerChildren: 0.05,
          },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col ">
        {dataActionlist.map((item, key) => (
          <SlideDownToUp key={`notfication-item-${key}`}>
            <NotificationctionsItem
              isReaded={item.isReaded}
              description={item.description}
              icon={item.icon}
              title={item.title}
              link={item.link}
            />
          </SlideDownToUp>
        ))}
      </div>
    </motion.div>
  );
}

export default NotificationAction;
