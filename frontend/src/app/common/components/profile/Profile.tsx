import React from 'react';
import { ProfileProps } from './profile';
import Image from 'next/image';
import Link from 'next/link';
interface ProfileComponentProps {
  showText?: boolean;
}
const Profile: React.FC<ProfileProps & ProfileComponentProps> = ({
  name,
  picture,
  role,
  link,
  showText = false, 
  company,
}) => {
  return (
    <Link className="pl-2" href={`/${link}`}>
      <div className="flex items-center">
        {picture ? (
          <Image src={picture} alt="Profile picture" />
        ) : (
          <div className="w-8 h-8 dark:bg-slate-700 flex items-center justify-center rounded-full">
            {name?.charAt(0)}
          </div>
        )}
        <div className={`ml-4 ${showText && 'hidden'}`}>
          <h1 className="font-bold">{name}</h1>
          <h2 className="pt-0 text-sm">{role} at { company }</h2>
          {/* <h2 className="pt-0 text-sm">{company}</h2> */}
        </div>
      </div>
    </Link>
  );
};

export default Profile;
