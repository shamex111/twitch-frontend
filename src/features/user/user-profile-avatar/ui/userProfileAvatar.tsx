'use client';

import UserMenu from '../../user-menu/ui/userMenu';
import Image from 'next/image';
import { FC, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { SELECTEL_URL } from '@/shared/constants';

import { userSelector } from '@/entities/user/store';

const UserProfileAvatar: FC = () => {
  const { userData } = useSelector(userSelector);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {isMenuOpen && (
        <div className='w-[0px] h-[0px]' ref={menuRef} >
          <UserMenu
            avatar={userData?.avatar as string}
            name={userData?.name as string}
          />
        </div>
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
