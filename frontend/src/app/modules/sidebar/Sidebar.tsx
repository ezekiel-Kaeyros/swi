'use client';

import React, { useState } from 'react';
import SidebarMenu from '@/app/common/components/sidebar-menu/SidebarMenu';
import SidebarToggleIcon from '../../../../public/icons/sidebarToggleIcon.svg';
import SettingsIcon from '../../../../public/icons/settingsIcon.svg';
import HamburgerIcon from '../../../../public/icons/hamburgerMenuIcon.svg';
import { navigation } from '@/app/common/navigation/navigation';
import Profile from '@/app/common/components/profile/Profile';
import Image from 'next/image';
import Link from 'next/link';

const Sidebar = () => {
  const [sidebarToggle, setSidebarToggle] = useState<boolean>(false);

  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <>
      <div className=" m-4 md:m-0">
        <Image
          onClick={() => setShowMenu((prev) => !prev)}
          className="md:hidden w-12"
          src={HamburgerIcon}
          alt="Hamburger menu"
        />
      </div>
      <div
        className={`border-r-[0.02px] ${
          showMenu ? 'absolute w-6/12 top-0 md:w-full md:relative' : 'hidden'
        }  md:block top-0  overflow-auto scrollbar-hide  h-screen dark:border-slate-600 dark:bg-bgColorDark py-6 px-2   ${
          sidebarToggle ? 'w-fit' : 'w-full'
        }`}
      >
        {/* Toggle icon */}

        <div className="mb-12 flex items-center ml-5">Logo</div>

        {navigation?.map((value) => (
          <SidebarMenu
            sidebarToggle={sidebarToggle}
            key={value?.id}
            title={value?.title}
            url={value?.url}
            submenus={value?.submenus && value?.submenus}
            icon={value?.icon}
          />
        ))}

        <div className=" mt-8">
          <div
            className={` ${sidebarToggle && '[&>a>div>:nth-child(2)]:hidden'}`}
          >
            <div className="ml-4">
              <Profile name="Chris Joe" link="/profile" role="Manager" />
            </div>

            <Link
              href={`/settings`}
              className="flex my-8 pl-4 items-center dark:hover:bg-slate-800 py-2 rounded-md"
            >
              <Image
                src={SettingsIcon}
                className="w-8 h-8 mr-3"
                alt="Settings icon"
              />{' '}
              <h1>Settings</h1>
            </Link>
          </div>
        </div>
      </div>

      <div className="my-auto hidden md:block w-10 h-10  z-100">
        {sidebarToggle ? (
          <Image
            onClick={() => {
              setSidebarToggle((prev) => !prev);
            }}
            className="cursor-pointer"
            src={SidebarToggleIcon}
            alt="Toggle icon"
          />
        ) : (
          <div
            onClick={() => {
              setSidebarToggle((prev) => !prev);
            }}
            className="cursor-pointer bg-slate-300 h-8 w-1 rounded-full ml-3"
          ></div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
