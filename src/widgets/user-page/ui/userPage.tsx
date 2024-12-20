'use client';

import { FC } from 'react';

import { userGetByNameQuery } from '@/entities/user/api/userGetByNameQuery';

import UserPageInfo from '@/features/user-page-info/ui/userPageInfo';

import styles from './userPage.module.scss';

interface IUserPage {
  name: string;
}

const UserPage: FC<IUserPage> = ({ name }) => {
  const { isLoading, error, data } = userGetByNameQuery(name);

  if (isLoading) return <div>Загрузка...</div>;

  if (error)
    return (
      <div className="text-white">Ошибка загрузки данных пользователя</div>
    );

  if (!data?.data)
    return <div className="text-white">Пользователь не найден</div>;

  const userColor = data.data.color || '#FFFFFF';

  return (
    <div className={`bg-[${userColor}] ${styles.userPageWrapper}`}>
      <UserPageInfo
        name={data.data.name}
        isOnline={data.data.streamId ? true : false}
        description={data.data.description}
      />
    </div>
  );
};

export default UserPage;
