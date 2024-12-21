import { FC } from 'react';

import styles from './userPageInfo.module.scss';
import { MdOutlineNotifications } from "react-icons/md";

interface IUserPageInfo {
  name: string;
  description: string;
  isOnline: boolean;
  isUserPage:boolean
}

const UserPageInfo: FC<IUserPageInfo> = ({ isOnline,isUserPage, description, name }) => {
  return (
    <div className={styles.userPageInfoWrapper}>
        {isOnline ? (
          <div className={styles.online}>
            <div className={styles.dot}></div>
            <div className={styles.text}>В ЭФИРЕ</div>
          </div>
        ) : (
          <div className={styles.offline}>
            <div className={styles.text}>НЕ В СЕТИ</div>
          </div>
        )}
      <div className={styles.userInfo}>{name + ' '}{isOnline ? 'в эфире' : 'пока оффлайн'}</div>
      <div className={styles.description}>{description}</div>
      {/* <div>
        {}
        <MdOutlineNotifications/>
        <div></div>
      </div> */}
    </div>
  );
};

export default UserPageInfo;
