'use client';

import { FC } from 'react';
import { useSelector } from 'react-redux';

import { SELECTEL_URL } from '@/shared/constants';

import { userGetByNameQuery } from '@/entities/user/api/userGetByNameQuery';
import { userSelector } from '@/entities/user/store';

import OtherPageButtons from '@/features/user/user-buttons/otherPageButtons/ui/otherPageButtons';
import SelfPageButtons from '@/features/user/user-buttons/selfPageButtons/ui/selfPageButtons';
import UserDescriptionInfo from '@/features/user/user-description/user-description-info/ui/userDescriptionInfo';
import UserPageAvatar from '@/features/user/user-page/user-page-avatar/ui/userPageAvatar';
import UserPageInfo from '@/features/user/user-page/user-page-info/ui/userPageInfo';
import UserPageStream from '@/features/user/user-page/user-page-stream/ui/userPageStream';

import styles from './userPage.module.scss';
import UserDescriptionParts from '@/features/user/user-description/user-description-parts/ui/userDescriptionParts';

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

  const userColor = data.banner ? undefined : data.color || '#FFFFFF';
  const userBannerUrl = data.banner
    ? `${SELECTEL_URL}${data.banner}`
    : undefined;

  return (
    <div
      className={styles.userPageWrapper}
      style={{
        backgroundImage: userBannerUrl ? `url(${userBannerUrl})` : undefined,
        backgroundColor: userBannerUrl ? undefined : userColor,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <header className={styles.header}>
        <UserPageInfo
          name={data.name}
          isOnline={!!data.streamId}
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
          <div className={styles.actionButtons}>
            {isUserPage ? <SelfPageButtons /> : <OtherPageButtons />}
          </div>
        </div>
        <div>
          <div>
            <div>Информация: {data.name}</div>
          <UserDescriptionInfo
            description={data.description}
            countFollowers={data.countFollowers}
          />
          <UserDescriptionParts data={data.descriptionParts}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
