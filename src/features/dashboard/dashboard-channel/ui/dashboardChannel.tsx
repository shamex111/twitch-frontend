'use client';

import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';

import { SELECTEL_URL } from '@/shared/constants';
import { Button } from '@/shared/ui/button';
import Modal from '@/shared/ui/modal/modal';
import { formatDate } from '@/shared/utils/formatDate';

import { IDescriptionPart, IFollower } from '@/entities/channel';
import { followersQuery } from '@/entities/channel/api';
import { userQuery } from '@/entities/user/api';

import UserDescriptionParts from '@/features/user/user-description/user-description-parts/ui/userDescriptionParts';

import CreateDescriptionPartModal from './createDescriptionPartModal';
import styles from './dashboardChannel.module.scss';

interface IDashboardChannel {
  userId: string;
}

const DashboardChannel: FC<IDashboardChannel> = ({ userId }) => {
  const [followersStartWith, setFollowersStartWith] = useState(0);
  const [countViewFollowers, setCountViewFollowers] = useState(10);
  const [
    isCreateDescriptionPartModalOpen,
    setIsCreateDescriptionPartModalOpen
  ] = useState(false);

  const [data, setData] = useState<IFollower[]>([]);

  const {
    isLoading: userIsLoading,
    error: userError,
    data: userDataFull,
    refetch: userRefetch
  } = userQuery(true);

  const {
    isLoading: followersIsLoading,
    error: followersError,
    data: followersDataFull,
    refetch: followersRefetch
  } = followersQuery(userId, 10, followersStartWith);

  useEffect(() => {
    const followersData = followersDataFull?.data;
    if (followersData) {
      setData(prevData => [...prevData, ...followersData]);
    }
  }, [followersDataFull]);

  const viewMore = () => {
    if (data.length > countViewFollowers) {
    } else if (countViewFollowers >= data.length) {
      console.log(12);
      setFollowersStartWith(followersStartWith + 10);
      followersRefetch();
      setCountViewFollowers(countViewFollowers + 10);
    }
  };

  if (userIsLoading) {
    return <div className="text-White">Loading...</div>;
  }

  if (userError) {
    return <div className="text-White">Error occurred</div>;
  }

  const userData = userDataFull?.data;
  return (
    <div className={styles.dashboardChannelWrapper}>
      {
        <Modal isOpen={isCreateDescriptionPartModalOpen}>
          <CreateDescriptionPartModal
            close={() => setIsCreateDescriptionPartModalOpen(false)}
            userRefetch={userRefetch}
          />
        </Modal>
      }

      <div className={styles.channelCard}>
        <Image
          src={SELECTEL_URL + userData?.avatar}
          alt="avatar"
          width={100}
          height={100}
          className={styles.avatar}
        />
        <div className={styles.label}>{userData?.name}</div>
      </div>
      <div className={styles.followersWrapper}>
        <div className={styles.followersHeader}>
          <div className={styles.heading}>
            Фолловеры ({userData?.countFollowers})
          </div>

          {countViewFollowers === 0 ? (
            <IoIosArrowUp
              className={styles.headerButton}
              onClick={() => setCountViewFollowers(10)}
            />
          ) : (
            <IoIosArrowDown
              className={styles.headerButton}
              onClick={() => setCountViewFollowers(0)}
            />
          )}
        </div>
        <div className={styles.noneFollowers}>
          {data?.length === 0 && 'Фолловеров пока нет, но все временно!'}
        </div>
        <div className={styles.followers}>
          {data?.slice(0, countViewFollowers)?.map(f => (
            <div key={f.id + Math.random()} className={styles.follower}>
              <Image
                src={SELECTEL_URL + f.user?.avatar}
                alt="avatar"
                width={100}
                height={100}
                className={styles.avatar}
              />
              <div className={styles.followerInfo}>
                <div className={styles.name}>{f?.user?.name}</div>
                <div className={styles.followAt}>
                  начал(а) отслеживать {formatDate(f.createdAt)}
                </div>
              </div>
              <div className={styles.actions}></div>
            </div>
          ))}
          {countViewFollowers > 10 && countViewFollowers !== 0 && (
            <div
              onClick={() => {
                setCountViewFollowers(10);
                setData(data.slice(0, 10));
              }}
              className={styles.viewMore}
            >
              Скрыть
            </div>
          )}
          {data.length < (userData?.countFollowers as number) &&
            countViewFollowers !== 0 && (
              <div onClick={viewMore} className={styles.viewMore}>
                Показать еще...
              </div>
            )}
        </div>
      </div>
      <div className={styles.descriptionPartsWrapper}>
        <div className={styles.heading}>Картинки-ссылки</div>
        <div>
          <Button
            variant="accent"
            className={styles.createButton}
            onClick={() => setIsCreateDescriptionPartModalOpen(true)}
          >
            Создать
          </Button>

          {userData?.descriptionParts.length === 0 && (
            <div className={styles.noneDescriptionParts}>
              Картинки-ссылки отсутсвуют
            </div>
          )}
          <UserDescriptionParts
            data={userData?.descriptionParts as IDescriptionPart[]}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardChannel;
