'use client';

import { FC } from 'react';
import { useSelector } from 'react-redux';

import { userSelector } from '@/entities/user/store';
import VerifiedNotification from '@/features/home/verified-notification/ui/verifiedNotification';

const MainContent: FC = () => {
  const { userData, isAuthorized, isLoading } = useSelector(userSelector);

  return (
    <main>{userData && !userData?.isVerified && <VerifiedNotification email={userData.email} />}</main>
  );
};

export default MainContent;
