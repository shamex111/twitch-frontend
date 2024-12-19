'use client';

import Image from 'next/image';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';

import { SELECTEL_URL } from '@/shared/constants';

import { userSelector } from '@/entities/user/store';

import UserMenu from '@/features/user-menu/ui/userMenu';

const UserProfileAvatar: FC = () => {
  const { userData } = useSelector(userSelector);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {isMenuOpen && (
        <UserMenu
          avatar={userData?.avatar as string}
          name={userData?.name as string}
        />
      )}
      <Image
        src={SELECTEL_URL + userData?.avatar}
        className="w-[50px] h-[50px] rounded-full cursor-pointer"
        alt="avatar"
        width={100}
        height={100}
        onClick={() => setIsMenuOpen(prev => !prev)}
      />
    </>
  );
};

export default UserProfileAvatar;
