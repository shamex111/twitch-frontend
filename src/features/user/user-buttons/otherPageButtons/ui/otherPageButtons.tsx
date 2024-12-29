'use client';

import { TFollowAction, followMutation } from '../api';
import { FC, useState } from 'react';
import toast from 'react-hot-toast';
import { FaRegStar } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa6';
import { IoMdNotifications } from 'react-icons/io';

import Modal from '@/shared/ui/modal/modal';

import { followerQuery } from '@/entities/channel/api';
import { subscriberQuery } from '@/entities/subscription/api';

import styles from './otherPageButtons.module.scss';
import SubscriptionModal from './subscriptionModal';

interface IOtherPageButtons {
  streamerId: string;
  userId: string;
}

const OtherPageButtons: FC<IOtherPageButtons> = ({ streamerId, userId }) => {
  const {
    data: followerData,
    isLoading: followerIsLoading,
    error: followerError,
    refetch: followRefetch
  } = followerQuery(streamerId, userId);
  const {
    data: subscriberData,
    isLoading: subscriberIsLoading,
    error: subscriberError
  } = subscriberQuery(streamerId, userId);

  const { mutate: followMutate } = followMutation();

  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);

  if (followerIsLoading || subscriberIsLoading) {
    return <div className="text-White">Loading...</div>;
  }
  if (followerError || subscriberError) {
    return <div className="text-White">error</div>;
  }

  const followAction = (type: TFollowAction) =>
    followMutate(
      { data: { streamerId }, type: type },
      {
        onSuccess: (data) => {
          followRefetch();
          toast.success(
            `Вы успешно ${type === 'follow' ? 'подписались' : 'отписались'}`
          );
        }
      }
    );

  return (
    <div className={styles.otherPageButtonsWrapper}>
      {isSubscriptionModalOpen && (
        <Modal isOpen={isSubscriptionModalOpen}>
          <SubscriptionModal
            close={() => setIsSubscriptionModalOpen(false)}
            streamerId={streamerId}
          />
        </Modal>
      )}
      <div className={styles.shortButton}>
        <FaHeart
          className={
            followerData?.data
              ? `${styles.followIcon}`
              : `${styles.unfollowIcon}`
          }
          onClick={() =>
            followAction(followerData?.data ? 'unfollow' : 'follow')
          }
        />
      </div>
      <div className={styles.shortButton}>
        <IoMdNotifications className={styles.icon} />
      </div>
      <div
        className={styles.button}
        onClick={
          !subscriberData?.data
            ? () => setIsSubscriptionModalOpen(true)
            : undefined
        }
      >
        <FaRegStar
          className={
            subscriberData?.data
              ? `${styles.subscribeIcon}`
              : `${styles.unsubscribeIcon}`
          }
        />
        <div className={styles.text}>
          {subscriberData?.data ? 'Вы подписаны' : 'Подписаться'}
        </div>
      </div>
    </div>
  );
};

export default OtherPageButtons;
