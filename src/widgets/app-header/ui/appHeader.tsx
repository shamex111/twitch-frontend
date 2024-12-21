'use client';

import { FC } from 'react';
import { useSelector } from 'react-redux';

import { Skeleton } from '@/shared/ui/skeleton';

import { userSelector } from '@/entities/user/store';

import styles from './appHeader.module.scss';
import Logo from './logo/logo';
import NotificationAction from '@/features/header/notification-action/ui/notificationAction';
import UserProfileAvatar from '@/features/user/user-profile-avatar/ui/userProfileAvatar';
import AuthButton from '@/features/auth/auth-buttons/ui/authButton';
import Search from '@/features/header/search/ui/search';

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
