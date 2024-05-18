'use client';
import LoginForm from '@/app/common/components/forms/login-form/LoginForm';
import React, { Suspense } from 'react';

const Logo = () => {
  return (
    <svg
      width="120"
      height="24"
      viewBox="0 0 120 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_4266_4153)">
        <path
          d="M51.8309 0V23.9795L58.5294 24V0.0102718L51.8309 0Z"
          fill="#E8E8E8"
        />
        <path
          d="M75.405 23.9897L68.3383 23.9846L61.0426 0H67.8505L75.405 23.9897Z"
          fill="#E8E8E8"
        />
        <path
          d="M75.405 23.9897L82.4667 23.9846L89.7624 0H82.9594L75.405 23.9897Z"
          fill="#E8E8E8"
        />
        <path
          d="M106.14 11.4582L99.3373 11.5866L92.2755 0.0359497H98.76L106.14 11.4582Z"
          fill="#E8E8E8"
        />
        <path
          d="M106.14 11.4582L112.938 11.5866L120 0.0359497H113.516L106.14 11.4582Z"
          fill="#E8E8E8"
        />
        <path
          d="M99.2079 23.9897H106.006L112.938 11.5866L106.14 11.4582L99.2079 23.9897Z"
          fill="#E8E8E8"
        />
        <path d="M29.8744 0H23.1759V23.9897H29.8744V0Z" fill="#E8E8E8" />
        <path
          d="M39.6284 11.2579L30.2924 23.9897L23.5889 23.9589L32.9299 11.2579H39.6284Z"
          fill="#E8E8E8"
        />
        <path
          d="M42.6194 0V23.9795L49.3178 24V0.0102718L42.6194 0Z"
          fill="#E8E8E8"
        />
        <path
          d="M32.93 11.2579L42.1964 23.9897L48.9048 24L39.6285 11.2579H32.93Z"
          fill="#E8E8E8"
        />
        <path
          d="M5.16568 0.00518799V5.33624H20.6627V0.00518799H5.16568ZM5.16568 9.33196V5.33624H0V14.6681H15.497V18.6639H20.6627V9.33196H5.16568ZM0 23.9949H15.497V18.6639H0V23.9949Z"
          fill="#E8E8E8"
        />
      </g>
      <defs>
        <clipPath id="clip0_4266_4153">
          <rect width="120" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
const page = () => {
  return (
    <div className="h-screen flex flex-col px-[16px] gap-[24px]  mt-[20dvh]   w-full  items-start">
      <div className="w-full items-start justify-start flex flex-col gap-3 ">
        <Logo />
        <h2 className="font-semibold text-[24px] leading-[32px]">
          Log in to your Account{' '}
        </h2>
      </div>
      <Suspense>
        <LoginForm />
      </Suspense>
    </div>
  );
};

export default page;
