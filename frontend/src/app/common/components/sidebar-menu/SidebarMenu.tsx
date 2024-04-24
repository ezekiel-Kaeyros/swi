'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { SidebarMenuProps } from './sidebarMenu';
import DownIcon from './icons/DownIcon';
import { usePathname } from 'next/navigation';

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  title,
  url,
  sidebarToggleState,
  icon,
  submenus,
}) => {
  const pathname = usePathname();

  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="flex my-4 w-full flex-col">
      {/* If submenus */}

      {!submenus ? (
        <Link
          href={`${url}`}
          className={`${
            !sidebarToggleState && 'dark:hover:bg-slate-800 w-full rounded-md'
          } ${
            pathname?.split('/')[2] === url?.split('/')[1] &&
            'dark:bg-bgColorDark/40  dark:hover:bg-bgColorDark/40 rounded-r-md rounded-l-none border-l-4 dark:border-primary '
          }  py-2 px-4 hover:dark:bg-bgColorDark/40  cursor-pointer items-center flex w-full hover:border-primary  border-l-transparent transition-colors duration-300`}
        >
          {/* Changing icon's color when selected */}
          {icon &&
            (pathname?.split('/')[2] === url?.split('/')[1] ? (
              <Image
                className="w-8 h-8"
                style={{
                  filter:
                    'invert(50%) sepia(43%) saturate(6353%) hue-rotate(173deg) brightness(95%) contrast(101%)',
                }}
                src={icon}
                alt="icon"
              />
            ) : (
              <Image
                className="w-8 h-8 fill-blue-500 [&+path]:fill-[#0094D9]"
                src={icon}
                style={{
                  filter:
                    pathname?.split('/')[2] === url?.split('/')[1]
                      ? 'invert(50%) sepia(43%) saturate(6353%) hue-rotate(173deg) brightness(95%) contrast(101%)'
                      : '',
                }}
                alt="icon"
              />
            ))}

          {/* Title navigation link */}

          <h1
            className={`ml-3 w-full ${
              toggle && submenus && 'dark:text-white text-primaryDark'
            } ${sidebarToggleState && !toggle && 'hidden'}  `}
          >
            {title}
          </h1>

          {/* Down icon rotating when selected */}
          {submenus && (
            <div
              className={`ml-2 ${
                !toggle
                  ? ' [&>svg>path]:fill-[#2C353A] dark:[&>svg>path]:fill-white '
                  : 'dark:[&>svg>path]:fill-[#0094D9] [&>svg>path]:fill-[#0094D9] rotate-180'
              } ${sidebarToggleState && !toggle && 'hidden'}`}
            >
              <DownIcon />
            </div>
          )}
          {/* If not submenus */}
        </Link>
      ) : (
        <div
          onClick={() => setToggle((prev) => !prev)}
          className={`${
            !toggle && 'dark:hover:bg-slate-800 w-full rounded-md'
          } ${
            (submenus && toggle) ||
            (pathname?.split('/')[2] === url?.split('/')[1] &&
              url === '/' &&
              'dark:bg-bgColorDark/40  dark:hover:bg-bgColorDark/40 rounded-r-md rounded-l-none border-l-4 dark:border-primary ')
          } py-2 px-4 hover:dark:bg-bgColorDark/40  cursor-pointer items-center flex w-full hover:border-primary  border-l-transparent transition-colors duration-300`}
        >
          {/* Changing icon's color when selected */}
          {icon &&
            (toggle ? (
              <Image
                className="w-8 h-8"
                style={{
                  filter:
                    'invert(50%) sepia(43%) saturate(6353%) hue-rotate(173deg) brightness(95%) contrast(101%)',
                }}
                src={icon}
                alt="icon"
              />
            ) : (
              <Image
                className="w-8 h-8 fill-blue-500 [&+path]:fill-[#0094D9]"
                src={icon}
                alt="icon"
              />
            ))}
          {/* Title navigation link */}
          <h1
            className={`ml-3 w-full ${
              toggle && submenus && 'dark:text-white text-primaryDark '
            } ${sidebarToggleState && !toggle && 'hidden'}`}
          >
            {title}
          </h1>
          {/* Down icon rotating when selected */}
          {submenus && (
            <div
              className={`ml-2 ${
                !toggle
                  ? ' [&>svg>path]:fill-[#2C353A] dark:[&>svg>path]:fill-white '
                  : 'dark:[&>svg>path]:fill-[#0094D9] [&>svg>path]:fill-[#0094D9] rotate-180'
              } ${sidebarToggleState && !toggle && 'hidden'}`}
            >
              <DownIcon />
            </div>
          )}
        </div>
      )}

      {/* Submenus section */}
      {submenus && toggle && (
        <div className="flex ml-9 mt-4 transition-all ease-in-out duration-400 relative flex-col w-fit ">
          <div className="absolute -left-1.5 h-full w-[1px] bg-primaryDark dark:bg-primaryDark"></div>
          <AnimatePresence>
            {submenus?.map((submenu) => (
              <motion.div
                className={`${
                  pathname?.split('/')[2] === submenu?.url?.split('/')[1] &&
                  'bg-slate-800 dark:bg-bgColorDark/40  dark:hover:bg-bgColorDark/40 rounded-r-md rounded-l-none border-l-4 dark:border-primary'
                }  py-2 px-4 my-1 hover:dark:bg-bgColorDark/40 rounded-md cursor-pointer items-center flex w-full hover:border-primary  border-l-transparent transition-colors duration-300`}
                key={submenu.subTitle}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Link key={submenu?.subTitle} href={`${submenu?.url}/`}>
                  {submenu?.subTitle}
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default SidebarMenu;
