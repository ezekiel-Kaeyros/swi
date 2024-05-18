import React, { useRef } from 'react';
import Image from 'next/image';

import { SlideInComponentProps } from './slideInComponent';
import CloseSlidInIcon from '../../../../../public/icons/closeSlideInIcon.svg';
import AnimateClick from '../animate-click/AnimateClick';
import { useClickOutside } from '@/app/hooks/commons/useClickOutside';

const SlideInComponent: React.FC<SlideInComponentProps> = ({
  title,
  isOpen,
  onClose,
  children,
}) => {
  const wrapperRef = useRef<HTMLInputElement>(null);

  const domNode = useClickOutside(() => {
    onClose();
  });

  return (
    <div
      ref={domNode}
      className={`${
        isOpen
          ? 'translate-x-0 transition ease-linear duration-200'
          : 'translate-x-[50rem]  transition ease-linear duration-200'
      } fixed  h-screen w-3/12 z-10 top-0 right-0  bg-cardDark`}
    >
      <div className="flex px-8 pt-4 justify-between">
        <h1 className="font-bold text-xl">{title}</h1>
        <div>
          <AnimateClick>
            <Image
              onClick={() => onClose()}
              alt="Close icon"
              src={CloseSlidInIcon}
            />
          </AnimateClick>
        </div>
      </div>
      <div className="py-4 h-[93vh] overflow-y-scroll p-8">{children}</div>
    </div>
  );
};

export default SlideInComponent;
