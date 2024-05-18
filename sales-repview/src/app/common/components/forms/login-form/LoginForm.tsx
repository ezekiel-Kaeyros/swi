'use client';

import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Spinner } from '@nextui-org/react';
import toast, { Toaster } from 'react-hot-toast';

import InputField from '../text-field/InputField';
import EmailIcon from '../../../../../../public/icons/loginUserIcon.svg';
import PasswordIcon from '../../../../../../public/icons/passwordIcon.svg';
import { Button } from '../../button/Button';
import Card from '../../card/Card';
import { LoginFormValues } from './loginForm';

import AuthService from '@/core/services/authService';
import { useRouter } from 'next/navigation';
import CustomInput from '../customInput/CustomInput';
import { Input } from 'postcss';
import { useAuth, useManageUserInStore } from '@/app/hooks/API/useAuth';
import { Axios, AxiosError, AxiosResponse } from 'axios';
import {
  getTokenCookies,
  setTokenCookies,
  setUserCookies,
} from '@/core/cookies/cookies';
import { AuthUser } from '@/core/models/Auth';
import { saveUserInfos } from '@/redux/features/auth-slice';

const LoginForm = () => {
  const { dispatch, user } = useManageUserInStore();
  const { push } = useRouter();
  const loginHooks = useAuth();

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<LoginFormValues>({ mode: 'onChange' || 'onBlur' || 'onSubmit' });

  // Triggers when submitting

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    // console.log(getTokenCookies());

    loginHooks
      .mutateAsync(data)
      .then((response) => {
        if (response !== undefined) {
          const { salesRep, token } = response;
          toast.success(`Welcome  ${salesRep.name}`);
          setTokenCookies(token);
          setUserCookies(salesRep);
          dispatch(saveUserInfos(salesRep));
          push('/');
        }
      })
      .catch((e) => {
        // toast.error(e);

        // const error = e.response?.data;
        toast.error(e.response?.data);
        console.log(e.response.data, 'error');
      });
    // const user = new AuthService().login(data);
    // setTimeout(() => {
    //   setIsLoading(false);
    //   toast.success('Successfully toasted!');
    //   push('/');
    // }, 1000);
  };

  return (
    <div className="  w-full    overflow-y-hidden">
      <Toaster position="bottom-center" reverseOrder={false} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full   dark:text-white "
      >
        <div className="space-y-6">
          <div className="space-y-1">
            <div className="text-[16px] leading-[20px]  font-medium text-primaryWhite">
              Email address
            </div>
            <input
              className="h-[48px] w-full px-[14px] py-[14px] gap-[8px] placeholder:text-[14px]  rounded-[8px] bg-bgColorDark focus:outline-none focus:ring-offset-0 appearance-none "
              {...register('email', {
                required: true,
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              })}
              type="email"
              placeholder="E-mail address"
            />
          </div>
          <div className="space-y-2">
            <div className="text-[16px] leading-[20px]  font-medium text-primaryWhite">
              Password
            </div>
            <input
              className="h-[48px] w-full px-[14px] py-[14px] gap-[8px] placeholder:text-[14px]  rounded-[8px] bg-bgColorDark focus:outline-none focus:ring-offset-0 appearance-none "
              {...register('password', {
                required: true,
              })}
              type="password"
              placeholder="E-mail address"
            />
            <p className="  opacity-80 text-[14px] leading-[20px] font-normal">
              Forgotten password ?
            </p>
          </div>
        </div>
        <div className="mt-10 w-full">
          <Button
            disabled={loginHooks.isPending ? true : false}
            variant={
              !loginHooks.isPending || loginHooks.isPending
                ? 'disabled'
                : 'default'
            }
            className="w-full rounded-[8px] !bg-[#162E66] !font-articulat text-[#214499] text-[18px] leading-[24px] text-center "
          >
            {loginHooks.isPending ? (
              <Spinner size="sm" color="white" />
            ) : (
              <span className="">Login</span>
            )}
          </Button>
        </div>
      </form>
    </div>
    // <div className=" rounded-xl w-full  justify-items-start overflow-y-hide">
    //   <div>
    //     <input type="text" />
    //   </div>
    // </div>
  );
};

export default LoginForm;
