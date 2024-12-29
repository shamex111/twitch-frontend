import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import toast from 'react-hot-toast';

import { IBuySubscription, subscriptionService } from '@/entities/subscription';

export type TSubscriptionAction = 'subscribe' | 'unsubscribe';

export const subscriptionMutation = () => {
  const { mutate } = useMutation({
    mutationKey: ['subscription'],
    mutationFn: (data: IBuySubscription) =>
      subscriptionService.buySubscription(data),

    onError: (error: AxiosError<{ message?: string }>) => {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Ошибка подписки.');
      }
    }
  });

  return { mutate };
};
