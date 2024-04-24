'use client';
import React, { useState } from 'react';
import NotificationIcon from '../../../../../../public/icons/notifIcon.svg';
import Global from '../../../components/SvgCustomIcons/global.svg';
import Notification from '../../../components/SvgCustomIcons/ring.svg';
import LanguageIcon from '../../../../../../public/icons/languageIcon.svg';
import NightIcon from '../../../../../../public/icons/nightIcon.svg';
import Image from 'next/image';
import AnimateClick from '../../animate-click/AnimateClick';
import { ThemeSwitcher } from '@/app/common/dark-mode/theme-switcher/ThemeSwitcher';
import HeaderBellSvgIcon from '../../SvgCustomIcons/ringSvgIcon';
import MoonSvgIcon from '../../SvgCustomIcons/moonSvgIcon';
import GlobalSvgIcon from '../../SvgCustomIcons/globalSvgIcon';

type NavBarProps = {
  lang: string;
};

const NavBar: React.FC<NavBarProps> = ({ lang }) => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full ml-auto">
      <div className="flex space-x-2">
        <AnimateClick>
          <div className=" cursor-pointer rounded-full w-12 h-12 p-1 flex items-center justify-center">
            <HeaderBellSvgIcon />
          </div>
        </AnimateClick>
        <AnimateClick>
          <div className="cursor-pointer rounded-full w-12 h-12 p-1 flex items-center justify-center">
            <GlobalSvgIcon />
          </div>
        </AnimateClick>

        <AnimateClick>
          <div className=" cursor-pointer rounded-full w-12 h-12 p-1 flex items-center justify-center">
            <ThemeSwitcher />
          </div>
        </AnimateClick>
      </div>
    </nav>
  );
};

export default NavBar;
