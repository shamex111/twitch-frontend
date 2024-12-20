import Image from 'next/image';
import { FC } from 'react';

import { SELECTEL_URL } from '@/shared/constants';

import styles from './SideChannelsList.module.scss';

export interface ISideChannelsListItem {
  avatar: string;
  name: string;
  category: string;
  isOnline: boolean;
  online?: number;
}

const SideChannelsListItem: FC<ISideChannelsListItem> = ({
  avatar,
  name,
  category,
  isOnline,
  online
}) => {
  return (
    <div className={styles.channelListItemWrapper}>
      <Image
        src={SELECTEL_URL + avatar}
        alt="avatar"
        width={100}
        height={100}
        className={styles.avatar}
      />
      <div className={styles.streamerInfo}>
        <div className={styles.streamerName}>{name}</div>
        <div className={styles.streamerCategory}>{category}</div>
      </div>
      {isOnline && (
        <div className={styles.streamInfo}>
          <div className={styles.dot}></div>
          <div className={styles.online}>{online}</div>
        </div>
      )}
    </div>
  );
};

export default SideChannelsListItem;
