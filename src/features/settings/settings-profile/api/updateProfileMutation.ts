import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';

import { IUpdateUser, userService } from '@/entities/user';

export const updateProfileMutation = () => {
  const { mutate } = useMutation({
    mutationKey: ['update profile'],
    mutationFn: (data: IUpdateUser) => userService.update(data),

    onError: (error: AxiosError<{ message?: string }>) => {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Ошибка обновления профиля.');
      }
    },
  });

  return { mutate };
};
