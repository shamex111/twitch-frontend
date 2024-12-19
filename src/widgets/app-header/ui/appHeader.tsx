'use client';

import { FC } from 'react';
import { useSelector } from 'react-redux';

import { Skeleton } from '@/shared/ui/skeleton';

import { userSelector } from '@/entities/user/store';

import AuthButton from '@/features/auth-buttons/ui/authButton';
import NotificationAction from '@/features/notification-action/ui/notificationAction';
import Search from '@/features/search/ui/search';
import UserProfileAvatar from '@/features/user-profile-avatar/ui/userProfileAvatar';

import styles from './appHeader.module.scss';
import Logo from './logo/logo';

const AppHeader: FC = () => {
  const { isLoading, isAuthorized } = useSelector(userSelector);

  return (
    <header className={styles.header}>
      <Logo />
      <Search />
      {isLoading ? (
        <Skeleton className={styles.loadingAvatar} />
      ) : isAuthorized ? (
        <div className={styles.userActions}>
          <NotificationAction /> <UserProfileAvatar />
        </div>
      ) : (
        <AuthButton />
      )}
    </header>
  );
};

export default AppHeader;