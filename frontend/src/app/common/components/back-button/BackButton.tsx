import React from 'react';

import LeftIcon from '../../../../../public/icons/arrowLeftIcon.svg';
import AnimateClick from '../animate-click/AnimateClick';
import Link from 'next/link';
import Image from 'next/image';

const BackButton = ({ href }: { href: string }) => {
  return (
    <AnimateClick>
      <Link
        className="items-center w-fit rounded-md
  py-2 px-3 dark:bg-cardDark flex  hover:dark:opacity-80"
        href={`/${href}`}
      >
        <Image src={LeftIcon} alt="Left icon" />
        <div className="ml-2">Back</div>
      </Link>
    </AnimateClick>
  );
};

export default BackButton;
