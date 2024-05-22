'use client';
import LoginForm from '@/app/common/components/forms/login-form/LoginForm';
import React, { Suspense } from 'react';

const page = () => {
  return (
    <div className="h-[100vh]">
      <LoginForm />
    </div>
  );
};

export default page;
