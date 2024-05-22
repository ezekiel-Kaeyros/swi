'use client';

import React, { useState } from 'react';
import SidebarMenu from '@/app/common/components/sidebar-menu/SidebarMenu';

import SettingsIcon from '../../../../public/icons/settingsIcon.svg';
import { navigation } from '@/app/common/navigation/navigation';
import Profile from '@/app/common/components/profile/Profile';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import LogoUnToggleSideBar from './icons/LogoUnToggleSideBar';
import LogoToggleSideBar from './icons/LogoToggleSideBar';
import ToggleArrowLeftIcon from './icons/ToggleArrowLeftIcon';
import ToggleArrowRightIcon from './icons/ToggleArrowRightIcon';
import AnimationSideBar from './AnimationSideBar';
import { setToggle } from '@/redux/design/toggle-sidebar-slice';
import { useToggleSidebar } from '@/app/hooks/useToggleSidebar';
import { getToggleSidebarkies } from '@/redux/design/cookies';
import QuestionIconSidebar from '@/app/common/components/SvgCustomIcons/questionIconSidebar';
import { useUserInfo } from '@/app/hooks/useUserInfo';

const Sidebar = () => {
  const [showMenu] = useState<boolean>(false);
  const { dispatch, toggleSideBarState } = useToggleSidebar();
  const toggleState = getToggleSidebarkies();

  const pathname = usePathname(); 

  const { decodeToken } = useUserInfo ()

  return (
    <>
      <AnimationSideBar showMenu={showMenu} sidebarToggle={toggleState}>
        <button
          className={`  cursor-pointer w-[28px] h-[28px] z-10 flex items-center justify-center  bg-bgColorDark rounded-full text-white absolute top-[50%] ${
            toggleState ? 'left-[65px]' : 'left-[280px]'
          }`}
          onClick={() => {
            dispatch(setToggle(!toggleSideBarState));
          }}
        >
          {toggleState ? <ToggleArrowLeftIcon /> : <ToggleArrowRightIcon />}
        </button>

        {/* toggleSideBarState icon */}
        <div className=" flex-col h-[calc(100%-5rem)] ">
          <div
            className={`mb-12 flex items-center ${
              toggleState ? 'ml-3' : 'ml-5'
            } my-auto`}
          >
            {toggleState ? <LogoToggleSideBar /> : <LogoUnToggleSideBar />}
          </div>

          {navigation?.map((value) => (
            <SidebarMenu
              sidebarToggleState={toggleState}
              key={value?.id}
              title={value?.title}
              url={value?.url}
              // submenus={value?.submenus && value?.submenus}
              icon={value?.icon}
            />
          ))}
          <div className="mt-[80px]">
            <div
              className={` ${toggleState && '[&>a>div>:nth-child(2)]:hidden'}`}
            >
              <Link
                href={`/settings`}
                className={`${
                  !toggleState && 'dark:hover:bg-slate-800 w-full my-4'
                } ${
                  pathname?.split('/')[2] === 'settings' &&
                  'dark:bg-bgColorDark/40  dark:hover:bg-bgColorDark/40 rounded-r-md border-l-4 dark:border-primary '
                }  py-2 rounded-md px-4 hover:dark:bg-bgColorDark/40  cursor-pointer items-center flex w-full hover:border-primary  border-l-transparent transition-colors duration-300`}
              >
                <Image
                  src={SettingsIcon}
                  className="w-8 h-8 mr-3"
                  alt="Settings icon"
                  style={{
                    filter:
                      pathname?.split('/')[2] === 'settings'
                        ? 'invert(50%) sepia(43%) saturate(6353%) hue-rotate(173deg) brightness(95%) contrast(101%)'
                        : '',
                  }}
                />{' '}
                {!toggleState ? <h1>Settings</h1> : ''}
              </Link>
            </div>
            <div
              className={` ${toggleState && '[&>a>div>:nth-child(2)]:hidden'}`}
            >
              <Link
                href={`/help`}
                className={`${
                  !toggleState && 'dark:hover:bg-slate-800 w-full my-4'
                } ${
                  pathname?.split('/')[2] === 'help' &&
                  'dark:bg-bgColorDark/40  dark:hover:bg-bgColorDark/40 rounded-r-md border-l-4 dark:border-primary '
                }  py-2 rounded-md px-4 hover:dark:bg-bgColorDark/40  cursor-pointer items-center flex w-full hover:border-primary  border-l-transparent transition-colors duration-300`}
              >
                <QuestionIconSidebar
                  alt="Settings icon"
                  style={{
                    filter:
                      pathname?.split('/')[2] === 'help'
                        ? 'invert(50%) sepia(43%) saturate(6353%) hue-rotate(173deg) brightness(95%) contrast(101%)'
                        : '',
                  }}
                />{' '}
                {!toggleState ? <h1 className="ml-3">Get Help</h1> : ''}
              </Link>
            </div>
          </div>
        </div>

        <div className="ml-4 ">
          <Profile
            name={ decodeToken?.user?.fullName }
            link="/profile"
            role="Manager"
            showText={toggleSideBarState}
            company={ decodeToken?.user?.id_company[0]?.name }
          />
        </div>
      </AnimationSideBar>
    </>
  );
};

export default Sidebar;
