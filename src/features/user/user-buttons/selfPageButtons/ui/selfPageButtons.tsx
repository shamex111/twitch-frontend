import { FC } from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';

import styles from './selfPageButtons.module.scss';

const SelfPageButtons: FC = () => {
  return (
    <div className={styles.selfPageButtonsWrapper}>
      <div className={styles.changeChannelButton}>
        <MdOutlineArrowOutward className={styles.icon}/>
        <div className={styles.text}>Настроить канал</div>
      </div>
    </div>
  );
};

export default SelfPageButtons;
