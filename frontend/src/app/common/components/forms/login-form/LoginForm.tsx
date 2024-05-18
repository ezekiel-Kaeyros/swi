'use client';

import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Spinner } from '@nextui-org/react';
import toast, { Toaster } from 'react-hot-toast';
import Swivy from '../../../../../../public/icons/swivy.svg';

import InputField from '../text-field/InputField';
import EmailIcon from '../../../../../../public/icons/loginUserIcon.svg';
import PasswordIcon from '../../../../../../public/icons/passwordIcon.svg';
import { Button } from '../../button/Button';
import Card from '../../card/Card';
import { LoginFormValues } from './loginForm';

import AuthService from '@/services/authService';
import { useRouter } from 'next/navigation';
import chartUi from '../../../../../../public/images/charts-ui.svg';
import graph from '../../../../../../public/images/graph.svg';
import Image from 'next/image';
import Road from '../../../../../../public/images/road.svg';
import axios from 'axios';
import { makePostReques } from '@/utils/makePostReq';
import { getUserCookies, setUserCookies } from '@/cookies/cookies';

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<LoginFormValues>({ mode: 'onChange' || 'onBlur' || 'onSubmit' });

  // Triggers when submitting

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    try {
      setIsLoading(true); // Set loading to true when submitting

      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        console.log(response, 'data');
        toast.error('Please check your credentials and try again');
        throw new Error('Failed to log in');
      }

      const responseData = await response.json();
      if (response.status == 200) {
        console.log(responseData, 'data');
        toast.success('This user was logged in successfully');
        setUserCookies(responseData.token);
        push('/');
      }
      // Handle successful login response here
    } catch (error) {
      console.error('data', error);
      // Handle login error
    } finally {
      setIsLoading(false); // Set loading back to false after submission
    }
  };

  

  return (
    <div className="dark:bg-[#000] h-full">
      {/* <div className="w-full p-4 text-red-400 text-center border bg-cardDark border-red-200 rounded-lg my-4">
        Login failed
      </div> */}
      <Toaster position="top-center" reverseOrder={false} />
      <form onSubmit={handleSubmit(onSubmit)} className="h-full">
        <div className="h-full relative">
          <div className="flex h-full items-end justify-end">
            <Image src={Road} alt="image" className="w-[1500px] h-[500px]" />
          </div>

          <div className="h-full absolute top-0 w-full flex items-center">
            <div className="flex justify-between w-full mx-20">
              <div className="px-4 w-[30%] h-fit dark:text-white">
                <div className="flex flex-col gap-y-2 mb-8">
                  <Image src={Swivy} alt="logo" />
                  <h1 className="font-bold text-xl lg:text-2xl">
                    Log in to your Account
                  </h1>
                </div>
                <div>
                  <div>
                    <InputField
                      // icon={EmailIcon}
                      name="email"
                      register={register('email', {
                        required: true,
                        pattern: {
                          value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                          message: 'Invalid email address',
                        },
                      })}
                      type="email"
                      placeholder="E-mail address"
                    />
                    {errors.email && (
                      <span className="text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <InputField
                      // icon={PasswordIcon}
                      register={register('password', {
                        required: true,
                        minLength: {
                          value: 6,
                          message:
                            'Password must be at least 6 characters long',
                        },
                        pattern: {
                          value:
                            /^(?=.*[a-zA-Z])(?=.*[\W_])[a-zA-Z\W_][a-zA-Z0-9\W_]{5,}$/,
                          message:
                            'Password must contain at least one letter and one special character',
                        },
                      })}
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                    {errors.password && (
                      <span className="text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                  </div>
                  <p className="opacity-80">Forgotten password ?</p>
                </div>
                <div className="mt-12 w-full">
                  <Button
                    disabled={!isValid || isLoading ? true : false}
                    // disabled={true}
                    variant={!isValid || isLoading ? 'disabled' : 'default'}
                    // variant={'disabled'}
                    className="w-full rounded-[8px] bg-[#162E66]"
                  >
                    {isLoading ? (
                      <Spinner size="sm" color="white" />
                    ) : (
                      <h1 className="text-[18px]">Login</h1>
                    )}
                  </Button>
                </div>
              </div>
              <div className="flex w-[40%] justify-between">
                <div className="">
                  <Image
                    src={chartUi}
                    alt="image"
                    className=" h-fit w-[300px]"
                  />
                </div>
                <div className="flex items-end">
                  <Image src={graph} alt="image" className="h-fit w-[300px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
