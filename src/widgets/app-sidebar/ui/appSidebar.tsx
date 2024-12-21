'use client';

import { FC } from 'react';
import { CiStreamOn } from 'react-icons/ci';
import { useSelector } from 'react-redux';

import { Button } from '@/shared/ui/button';

import { userSelector } from '@/entities/user/store';

import styles from './appSidebar.module.scss';
import SideChannelsList from '@/features/sidebar/side-channels-list/ui/SideChannelsList';
import { ISideChannelsListItem } from '@/features/sidebar/side-channels-list/ui';

const AppSidebar: FC = () => {
  const mockSideChannelsList: ISideChannelsListItem[] = [
    {
      avatar: '/users/f4b2c56-dd37-4bd9-a7a1-ff861e699a9b.webp',
      name: 'Tech Talk',
      category: 'Technology',
      isOnline: true,
      online: 1200
    },
    {
      avatar: '/users/f4b2c56-dd37-4bd9-a7a1-ff861e699a9b.webp',
      name: 'Gaming Hub',
      category: 'Gaming',
      isOnline: false,
      online: 0
    },
    {
      avatar: '/users/f4b2c56-dd37-4bd9-a7a1-ff861e699a9b.webp',
      name: 'Fitness World',
      category: 'Health & Fitness',
      isOnline: true,
      online: 250
    },
    {
      avatar: '/users/f4b2c56-dd37-4bd9-a7a1-ff861e699a9b.webp',
      name: 'Music Lovers',
      category: 'Music',
      isOnline: false,
      online: undefined
    },
    {
      avatar: '/users/f4b2c56-dd37-4bd9-a7a1-ff861e699a9b.webp',
      name: 'Daily News',
      category: 'News',
      isOnline: true,
      online: 530
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
      <Button className={styles.streamButton}>
        <div className={styles.streamText}>Начать трансляцию</div>
        <CiStreamOn className={styles.streamIcon} />
      </Button>
    </div>
  );
};

export default AppSidebar;
