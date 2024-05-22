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
import { removeUserCookies } from '@/cookies/cookies';
import { usePathname, useRouter } from 'next/navigation';

type NavBarProps = {
  lang: string;
};

const NavBar: React.FC<NavBarProps> = ({ lang }) => {
  const [navbar, setNavbar] = useState(false);

  const router = useRouter ()

  const pathname = usePathname();
  const baseLangUrl = pathname.split("/"); 

  const logOut = () => {
    // dispatch(clearAllCashoutFormInfo(theStore));
    localStorage.clear(); 
    removeUserCookies ()
    router.push(`/${ baseLangUrl[1]}/login`);
  }

  return (
    <nav className="w-full ml-auto">
      <div className="flex space-x-2">
        <AnimateClick>
          <div className=" cursor-pointer rounded-full w-12 h-12 p-1 flex items-center justify-center">
            {/* <HeaderBellSvgIcon /> */}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.4" d="M16.1163 12.075L15.283 10.6917C15.108 10.3833 14.9496 9.79999 14.9496 9.45832V7.34999C14.9496 4.63332 12.7413 2.41666 10.0163 2.41666C7.29129 2.41666 5.08296 4.63332 5.08296 7.34999V9.45832C5.08296 9.79999 4.92463 10.3833 4.74963 10.6833L3.90796 12.075C3.57463 12.6333 3.49963 13.25 3.70796 13.8167C3.90796 14.375 4.38296 14.8083 4.99963 15.0167C6.61629 15.5667 8.31629 15.8333 10.0163 15.8333C11.7163 15.8333 13.4163 15.5667 15.033 15.025C15.6163 14.8333 16.0663 14.3917 16.283 13.8167C16.4996 13.2417 16.4413 12.6083 16.1163 12.075Z" fill="#BABABA"/>
                <path d="M11.8753 2.76666C11.3003 2.54166 10.6753 2.41666 10.017 2.41666C9.36699 2.41666 8.74199 2.53332 8.16699 2.76666C8.52533 2.09166 9.23366 1.66666 10.017 1.66666C10.8087 1.66666 11.5087 2.09166 11.8753 2.76666Z" fill="#BABABA"/>
                <path d="M12.3587 16.675C12.0087 17.6417 11.0837 18.3333 10.0004 18.3333C9.34206 18.3333 8.69206 18.0667 8.23372 17.5917C7.96706 17.3417 7.76706 17.0083 7.65039 16.6667C7.75872 16.6833 7.86706 16.6917 7.98372 16.7083C8.17539 16.7333 8.37539 16.7583 8.57539 16.775C9.05039 16.8167 9.53372 16.8417 10.0171 16.8417C10.4921 16.8417 10.9671 16.8167 11.4337 16.775C11.6087 16.7583 11.7837 16.75 11.9504 16.725C12.0837 16.7083 12.2171 16.6917 12.3587 16.675Z" fill="#BABABA"/>
              </svg>

          </div>
        </AnimateClick>
        <AnimateClick>
          <div className="cursor-pointer rounded-full w-12 h-12 p-1 flex items-center justify-center">
            {/* <GlobalSvgIcon /> */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M6.3748 17.425C6.3498 17.425 6.31647 17.4417 6.29147 17.4417C4.6748 16.6417 3.35814 15.3167 2.5498 13.7C2.5498 13.675 2.56647 13.6417 2.56647 13.6167C3.58314 13.9167 4.63314 14.1417 5.6748 14.3167C5.85814 15.3667 6.0748 16.4083 6.3748 17.425Z" fill="#BABABA"/>
              <path opacity="0.4" d="M17.4502 13.7083C16.6252 15.3667 15.2502 16.7083 13.5752 17.5167C13.8919 16.4583 14.1585 15.3917 14.3335 14.3167C15.3835 14.1417 16.4169 13.9167 17.4335 13.6167C17.4252 13.65 17.4502 13.6833 17.4502 13.7083Z" fill="#BABABA"/>
              <path opacity="0.4" d="M17.5169 6.425C16.4669 6.10834 15.4085 5.85 14.3335 5.66667C14.1585 4.59167 13.9002 3.525 13.5752 2.48334C15.3002 3.30834 16.6919 4.7 17.5169 6.425Z" fill="#BABABA"/>
              <path opacity="0.4" d="M6.37507 2.57499C6.07507 3.59165 5.8584 4.62499 5.6834 5.67499C4.6084 5.84165 3.54173 6.10832 2.4834 6.42499C3.29173 4.74999 4.6334 3.37499 6.29173 2.54999C6.31673 2.54999 6.35006 2.57499 6.37507 2.57499Z" fill="#BABABA"/>
              <path d="M12.9085 5.49166C10.9751 5.27499 9.02513 5.27499 7.0918 5.49166C7.30013 4.34999 7.5668 3.20832 7.9418 2.10832C7.95846 2.04166 7.95013 1.99166 7.95846 1.92499C8.6168 1.76666 9.2918 1.66666 10.0001 1.66666C10.7001 1.66666 11.3835 1.76666 12.0335 1.92499C12.0418 1.99166 12.0418 2.04166 12.0585 2.10832C12.4335 3.21666 12.7001 4.34999 12.9085 5.49166Z" fill="#BABABA"/>
              <path d="M5.49199 12.9083C4.34199 12.7 3.20866 12.4333 2.10866 12.0583C2.04199 12.0417 1.99199 12.05 1.92533 12.0417C1.76699 11.3833 1.66699 10.7083 1.66699 10C1.66699 9.30001 1.76699 8.61667 1.92533 7.96667C1.99199 7.95834 2.04199 7.95834 2.10866 7.94167C3.21699 7.57501 4.34199 7.30001 5.49199 7.09167C5.28366 9.02501 5.28366 10.975 5.49199 12.9083Z" fill="#BABABA"/>
              <path d="M18.3338 10C18.3338 10.7083 18.2338 11.3833 18.0755 12.0417C18.0088 12.05 17.9588 12.0417 17.8921 12.0583C16.7838 12.425 15.6505 12.7 14.5088 12.9083C14.7255 10.975 14.7255 9.02501 14.5088 7.09167C15.6505 7.30001 16.7921 7.56667 17.8921 7.94167C17.9588 7.95834 18.0088 7.96667 18.0755 7.96667C18.2338 8.62501 18.3338 9.30001 18.3338 10Z" fill="#BABABA"/>
              <path d="M12.9085 14.5083C12.7001 15.6583 12.4335 16.7917 12.0585 17.8917C12.0418 17.9583 12.0418 18.0083 12.0335 18.075C11.3835 18.2333 10.7001 18.3333 10.0001 18.3333C9.2918 18.3333 8.6168 18.2333 7.95846 18.075C7.95013 18.0083 7.95846 17.9583 7.9418 17.8917C7.57513 16.7833 7.30013 15.6583 7.0918 14.5083C8.05846 14.6167 9.02513 14.6917 10.0001 14.6917C10.9751 14.6917 11.9501 14.6167 12.9085 14.5083Z" fill="#BABABA"/>
              <path d="M13.1364 13.1361C11.0522 13.3991 8.94846 13.3991 6.86422 13.1361C6.60125 11.0519 6.60125 8.94813 6.86422 6.86388C8.94846 6.60092 11.0522 6.60092 13.1364 6.86388C13.3994 8.94813 13.3994 11.0519 13.1364 13.1361Z" fill="#BABABA"/>
            </svg>

          </div>
        </AnimateClick>
        <AnimateClick>
          <div className=" cursor-pointer rounded-full w-12 h-12 p-1 flex items-center justify-center">
            <ThemeSwitcher />
            {/* <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.50025 15.8333C7.50025 16.5333 7.60858 17.2167 7.80858 17.85C4.60858 16.7417 2.19191 13.8 1.94191 10.3583C1.69191 6.7 3.80024 3.28333 7.20858 1.85C8.09191 1.48333 8.54191 1.75 8.73358 1.94166C8.91691 2.125 9.17524 2.56666 8.80858 3.40833C8.43358 4.275 8.25024 5.19166 8.25024 6.14166C8.25858 7.84166 8.92525 9.41666 10.0086 10.625C8.48358 11.8417 7.50025 13.725 7.50025 15.8333Z" fill="#BABABA"/>
              <path opacity="0.4" d="M17.675 14.7667C16.025 17.0083 13.4083 18.325 10.6167 18.325C10.4833 18.325 10.35 18.3167 10.2167 18.3083C9.38333 18.275 8.575 18.1167 7.80833 17.85C7.60833 17.2167 7.5 16.5333 7.5 15.8333C7.5 13.725 8.48333 11.8417 10.0083 10.625C11.2333 12 12.9917 12.8917 14.9333 12.975C15.4583 13 15.9833 12.9583 16.5 12.8667C17.4333 12.7 17.8083 13.05 17.9417 13.275C18.0833 13.5 18.2333 13.9917 17.675 14.7667Z" fill="#BABABA"/>
            </svg> */}

          </div>
        </AnimateClick>
        <AnimateClick>
          <div onClick={ () => logOut () } className=" cursor-pointer rounded-full w-12 h-12 p-1 flex items-center justify-center">
            {/* <ThemeSwitcher /> */}
            <svg fill="#ffffff" width={ 20 } viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className="icon" stroke="#ffffff">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> 
                <path d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9 353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"></path> 
              </g>
            </svg>
          </div>
        </AnimateClick>
      </div>
    </nav>
  );
};

export default NavBar;
