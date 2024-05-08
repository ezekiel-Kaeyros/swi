'use client';
import { useHeaderTitle } from '@/app/hooks/useHeaderTitle';
import NavBar from './navbar/NavBar';
import { useEffect } from 'react';
import { setTitle } from './slice/header-title-slice';

export default function Header({
  lang,
  headerTitle,
}: {
  lang: string;
  headerTitle?: string;
}) {
  const {
    dispatch,
    headerTitleState: { title },
  } = useHeaderTitle();

  useEffect(() => {
    dispatch(setTitle(headerTitle ? headerTitle : ''));
    return () => {};
  }, []);

  return (
    <header className="absolute  z-10 top-0 w-full flex justify-between items-center h-[5rem] px-5 py-10  border-b-2 border-bgColorDark">
      <h1 className="font-black text-[1.3rem] leading-7 ">
        {title !== '' ? title : ''}
      </h1>
      <div className="right-12 lg:right-12">
        {' '}
        <NavBar lang={lang} />
      </div>
    </header>
  );
}
