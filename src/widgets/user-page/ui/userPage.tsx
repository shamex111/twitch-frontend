'use client';

import { FC } from 'react';
import { useSelector } from 'react-redux';

import { userGetByNameQuery } from '@/entities/user/api/userGetByNameQuery';
import { userSelector } from '@/entities/user/store';

import UserPageAvatar from '@/features/user/user-page/user-page-avatar/ui/userPageAvatar';
import OtherPageButtons from '@/features/user/user-page/user-page-buttons/otherPageButtons/ui/otherPageButtons';
import SelfPageButtons from '@/features/user/user-page/user-page-buttons/selfPageButtons/ui/selfPageButtons';
import UserPageInfo from '@/features/user/user-page/user-page-info/ui/userPageInfo';
import UserPageStream from '@/features/user/user-page/user-page-stream/ui/userPageStream';

import styles from './userPage.module.scss';

interface IUserPage {
  name: string;
}

const UserPage: FC<IUserPage> = ({ name }) => {
  const {
    isLoading: userIsLoading,
    error,
    data: userData
  } = userGetByNameQuery(name);

  const {
    isLoading: selfUserIsLoading,
    isAuthorized,
    userData: selfUserData
  } = useSelector(userSelector);

  if (userIsLoading) return <div>Загрузка...</div>;

  if (error)
    return (
      <div className="text-white">Ошибка загрузки данных пользователя</div>
    );

  if (!userData?.data)
    return <div className="text-white">Пользователь не найден</div>;

  const data = userData.data;

  const isUserPage = selfUserData?.id === data.id;

  const userColor = data.color || '#FFFFFF';

  return (
    <div
      className={`${styles.userPageWrapper}`}
      style={{
        background: userColor
      }}
    >
      <header className={styles.header}>
        <UserPageInfo
          name={data.name}
          isOnline={data.streamId ? true : false}
          description={data.description}
          isUserPage={isUserPage}
        />
        <UserPageStream />
      </header>

      <div className={styles.content}>
        <div className={styles.topContent}>
          <UserPageAvatar
            name={data.name}
            countFollowers={data.countFollowers}
            avatar={data.avatar}
          />
          <div className={styles.actionButtons}>{isUserPage ? <SelfPageButtons /> : <OtherPageButtons />}</div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
