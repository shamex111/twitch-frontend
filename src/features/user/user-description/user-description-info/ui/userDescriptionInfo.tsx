import { FC } from 'react';

import { formatFollowers } from '@/shared/utils';

import styles from './userDescriptionInfo.module.scss';

interface IUserDescriptionInfo {
  countFollowers: number;
  description: string;
  name: string;
}

const UserDescriptionInfo: FC<IUserDescriptionInfo> = ({
  description,
  countFollowers,
  name
}) => {
  return (
    <div className={styles.userDescriptionInfoWrapper}>
      <div className={styles.heading}>Информация: {name}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.countFollowers}>
        {formatFollowers(countFollowers)}
      </div>
    </div>
  );
};

export default UserDescriptionInfo;
