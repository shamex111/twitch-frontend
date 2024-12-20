import { FC } from 'react';

import styles from './userPageInfo.module.scss';

interface IUserPageInfo {
  name: string;
  description: string;
  isOnline: boolean;
}

const UserPageInfo: FC<IUserPageInfo> = ({ isOnline, description, name }) => {
  return (
    <div className={styles.userPageInfoWrapper}>
      <div className={styles.isOnline}>
        {isOnline ? 'В ЭФИРЕ' : 'НЕ В СЕТИ'}
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default UserPageInfo;
