'use client';

import { subscriptionMutation } from '../api';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { GoX } from 'react-icons/go';

import { SELECTEL_URL } from '@/shared/constants';
import { Button } from '@/shared/ui/button';

import { subscriptionQuery } from '@/entities/subscription/api/subscriptionQuery';

import styles from './otherPageButtons.module.scss';

interface ISubscriptionModal {
  close: () => void;
  streamerId: string;
}

const SubscriptionModal: FC<ISubscriptionModal> = ({ streamerId, close }) => {
  const { data, isLoading, error } = subscriptionQuery(streamerId);
  const { mutate: subscriptionMutate } = subscriptionMutation();
  const subscriptionData = data?.data;
  const { push } = useRouter();

  return (
    <div className={styles.subscriptionModalWrapper}>
      <GoX onClick={close} className={styles.close} />
      <div className={styles.header}>Покупка подписки</div>
      {isLoading && <div className="text-White">Loading...</div>}
      {error && <div className="text-White">error</div>}
      {!error && !isLoading && (
        <div>
          <div className="flex space-x-3 my-4 mx-auto w-fit">
            <Image
              src={SELECTEL_URL + subscriptionData?.icon}
              alt="icon"
              width={100}
              height={100}
              className="rounded-full h-[50px] w-[50px]"
            />
            <div className="my-auto text-[16px] text-White font-medium">
              {subscriptionData?.price}₽
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <div className="text-Gray text-[13px] ">
              Покупая эту подписку, вы поддерживаете стримера и обретаете
              следующие возможности на 30 дней:
            </div>
            <nav>
              <ul className="text-[14px]">
                <li className="flex space-x-3">
                  <div className="text-White">Значок в чате</div>
                  <Image
                    src={SELECTEL_URL + subscriptionData?.icon}
                    alt="icon"
                    width={10}
                    height={10}
                    className="rounded-full h-[20px] my-auto w-[20px]"
                  />
                </li>
                <li className="text-White">Благодарность стримера</li>
              </ul>
            </nav>
          </div>
          <div>
            <Button
              variant="accent"
              className="w-full mt-[20px]"
              onClick={() =>
                subscriptionMutate(
                  {
                    userId: streamerId,
                    callbackUrl: window.location.href
                  },
                  {
                    onSuccess: data => {
                      push(data.data.confirmation.confirmation_url);
                    }
                  }
                )
              }
            >
              Купить
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubscriptionModal;
