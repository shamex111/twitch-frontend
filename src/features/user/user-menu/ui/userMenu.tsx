'use client';

import { logoutMutation } from '../api';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { useSelector } from 'react-redux';

import { SELECTEL_URL } from '@/shared/constants';
import { APP_ROUTES } from '@/shared/routes';

import { userSelector } from '@/entities/user/store';

import styles from './userMenu.module.scss';

interface IUserMenu {
  name: string;
  avatar: string;
}

const UserMenu: FC<IUserMenu> = ({ name, avatar }) => {
  const { mutate: logoutMutate } = logoutMutation();
  const { userData, isLoading, isAuthorized } = useSelector(userSelector);

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
          <Link
            className={styles.itemListLinkName}
            href={APP_ROUTES.user(userData?.name as string)}
          >
            Канал
          </Link>
        </li>
        <li className={styles.itemListLinks}>
          <Link
            className={styles.itemListLinkName}
            href={APP_ROUTES.dashboard()}
          >
            Панель управления автора
          </Link>
        </li>
        <li className={styles.itemListLinks}>
          <Link
            className={styles.itemListLinkName}
            href={APP_ROUTES.settings()}
          >
            Настройки
          </Link>
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
