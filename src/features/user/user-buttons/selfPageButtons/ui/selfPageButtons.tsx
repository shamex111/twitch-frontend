import { FC } from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';

import styles from './selfPageButtons.module.scss';
import Link from 'next/link';
import { APP_ROUTES } from '@/shared/routes';

const SelfPageButtons: FC = () => {
  return (
    <div className={styles.selfPageButtonsWrapper}>
      <div className={styles.changeChannelButton}>
        <MdOutlineArrowOutward className={styles.icon}/>
        <Link href={APP_ROUTES.dashboard()} className={styles.text}>Настроить канал</Link>
      </div>
    </div>
  );
};

export default SelfPageButtons;
