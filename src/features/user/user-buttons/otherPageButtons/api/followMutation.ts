import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import toast from 'react-hot-toast';

import { IResponse } from '@/shared/types';

import { IFollow, IUnfollow, channelService } from '@/entities/channel';

export type TFollowAction = 'follow' | 'unfollow';

interface MutationParams {
  data: IFollow | IUnfollow;
  type: TFollowAction;
}
type MutationResponse = AxiosResponse<IFollow> | AxiosResponse<IResponse>;

export const followMutation = () => {
  const { mutate } = useMutation({
    mutationKey: ['follow'],
    mutationFn: ({ data, type }: MutationParams): Promise<MutationResponse> => {
      switch (type) {
        case 'follow':
          return channelService.follow(data);
        case 'unfollow':
          return channelService.unfollow(data);
        default:
          throw new Error('Неправыильный тип мутации фолловинга.');
      }
    },

    onError: (error: AxiosError<{ message?: string }>) => {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Ошибка фолловинга.');
      }
    },
  });

  return { mutate };
};
