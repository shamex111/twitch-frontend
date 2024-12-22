import { FC } from 'react';
import { FaRegStar } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa6';
import { IoMdNotifications } from 'react-icons/io';

import styles from './otherPageButtons.module.scss';

const OtherPageButtons: FC = () => {
  return (
    <div className={styles.otherPageButtonsWrapper}>
      <div className={styles.shortButton}>
        <FaHeart className={styles.icon} />
      </div>
      <div className={styles.shortButton}>
        <IoMdNotifications className={styles.icon} />
      </div>
      <div className={styles.button}>
        <FaRegStar className={styles.icon} />
        <div className={styles.text}>Подписаться</div>
      </div>
    </div>
  );
};

export default OtherPageButtons;
