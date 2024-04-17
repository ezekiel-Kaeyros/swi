'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type NavItemProps = {
  url: string;
  title: string;
};
const NavItem: React.FC<NavItemProps> = ({ title, url }) => {
  const pathname = usePathname();

  return (
    <Link
      className={`text-white ${
        url === pathname &&
        'bg-buttonPrimary rounded-full px-3 py-1 transition ease-linear duration-200'
      }`}
      href={`${url}`}
    >
      {title}
    </Link>
  );
};

export default NavItem;
