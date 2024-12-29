'use client';

import Link from 'next/link';
import { FC } from 'react';
import { CiStreamOn } from 'react-icons/ci';
import { useSelector } from 'react-redux';

import { APP_ROUTES } from '@/shared/routes';
import { Button } from '@/shared/ui/button';

import { userSelector } from '@/entities/user/store';

import { ISideChannelsListItem } from '@/features/sidebar/side-channels-list/ui';
import SideChannelsList from '@/features/sidebar/side-channels-list/ui/SideChannelsList';

import styles from './appSidebar.module.scss';

const AppSidebar: FC = () => {
  const mockSideChannelsList: ISideChannelsListItem[] = [
    {
      avatar: '/users/7e21517a-bab1-4ab8-a33a-6eef6421780f.webp',
      name: 'Tech Talk',
      category: 'Technology',
      isOnline: true,
      online: 1200,
      username: 'Андрей'
    },
    {
      avatar: '/users/7e21517a-bab1-4ab8-a33a-6eef6421780f.webp',
      name: 'Gaming Hub',
      category: 'Gaming',
      isOnline: false,
      online: 0,
      username: 'Андрей'
    },
    {
      avatar: '/users/7e21517a-bab1-4ab8-a33a-6eef6421780f.webp',
      name: 'Fitness World',
      category: 'Health & Fitness',
      isOnline: true,
      online: 250,
      username: 'Андрей'
    },
    {
      avatar: '/users/7e21517a-bab1-4ab8-a33a-6eef6421780f.webp',
      name: 'Music Lovers',
      category: 'Music',
      isOnline: false,
      online: undefined,
      username: 'Андрей'
    },
    {
      avatar: '/users/7e21517a-bab1-4ab8-a33a-6eef6421780f.webp',
      name: 'Daily News',
      category: 'News',
      isOnline: true,
      online: 530,
      username: 'Андрей'
    }
  ];
  const { userData, isAuthorized, isLoading } = useSelector(userSelector);

  return (
    <div className={styles.sidebar}>
      <div className={styles.channels}>
        {isAuthorized && (
          <div className={styles.followChannels}>
            <div className={styles.title}>Отслеживаемые каналы</div>
            <SideChannelsList data={mockSideChannelsList} />
          </div>
        )}
        <div className={styles.recommendChannels}>
          <div className={styles.title}>Рекомендуемые каналы</div>
          <SideChannelsList data={mockSideChannelsList} />
        </div>
      </div>
      <Link href={APP_ROUTES.dashboard()}>
        <div className={styles.streamButton}>
          <div className={styles.streamText}>Начать трансляцию</div>
          <CiStreamOn className={styles.streamIcon} />
        </div>
      </Link>
    </div>
  );
};

export default AppSidebar;
