'use client';

import { logoutMutation } from '../api';
import Image from 'next/image';
import { FC } from 'react';

import { SELECTEL_URL } from '@/shared/constants';

import styles from './userMenu.module.scss';

interface IUserMenu {
  name: string;
  avatar: string;
}

const UserMenu: FC<IUserMenu> = ({ name, avatar }) => {
  const { mutate: logoutMutate } = logoutMutation();

  return (
    <div className={styles.userMenuWrapper}>
      <div className={styles.userInfo}>
        <Image
          alt="avatar"
          src={SELECTEL_URL + avatar}
          width={100}
          height={100}
          className={styles.avatar}
        />
        <div className={styles.name}>{name}</div>
      </div>
      <div className={styles.line}></div>
      <ul className={styles.listLinks}>
        <li className={styles.itemListLinks}>
          <div className={styles.itemListLinkName}>Канал</div>
        </li>
        <li className={styles.itemListLinks}>
          <div className={styles.itemListLinkName}>
            Панель управления автора
          </div>
        </li>
        <li className={styles.itemListLinks}>
          <div className={styles.itemListLinkName}>Настройки</div>
        </li>
        <li className={styles.itemListLinks}>
          <div className={styles.itemListLinkName}>Кошелек</div>
        </li>
      </ul>
      <div className={styles.line}></div>
      <ul className={styles.listLinks}>
        <li className={styles.itemListLinks}>
          <div
            className={styles.itemListLinkName}
            onClick={() => logoutMutate()}
          >
            Выход
          </div>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
