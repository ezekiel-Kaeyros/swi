'use client';
import LoginForm from '@/app/common/components/forms/login-form/LoginForm';
import React, { Suspense } from 'react';

const page = () => {
  return (
    // <div className="h-full mx-auto my-auto justify-center max-w-md w-full flex items-center">
    <div className="h-[100vh]">
      {/* <Suspense> */}
      <LoginForm />
      {/* </Suspense> */}
    </div>
  );
};

export default page;
