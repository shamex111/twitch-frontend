import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';

import { userService } from '@/entities/user';

export const updateProfileBannerMutation = () => {
  const { mutate } = useMutation({
    mutationKey: ['update profile banner'],
    mutationFn: (file: File) => userService.updateBanner(file),

    onError: (error: AxiosError<{ message?: string }>) => {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Ошибка обновления баннера профиля.');
      }
    },
  });

  return { mutate };
};
