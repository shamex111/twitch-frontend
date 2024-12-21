import Image from 'next/image';
import { FC } from 'react';

import { SELECTEL_URL } from '@/shared/constants';
import { formatFollowers } from '@/shared/utils';

import styles from './userPageAvatar.module.scss';

interface IUserPageAvatar {
  name: string;
  avatar: string;
  countFollowers: number;
}

const UserPageAvatar: FC<IUserPageAvatar> = ({
  name,
  avatar,
  countFollowers
}) => {
  return (
    <div className={styles.userPageAvatarWrapper}>
      <Image
        src={SELECTEL_URL + avatar}
        alt="avatar"
        width={100}
        height={100}
        className={styles.avatar}
      />
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.countFollowers}>{formatFollowers(countFollowers)}</div>
      </div>
    </div>
  );
};

export default UserPageAvatar;
