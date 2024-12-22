import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';

import { userService } from '@/entities/user';

export const updateProfileAvatarMutation = () => {
  const { mutate } = useMutation({
    mutationKey: ['update profile avatar'],
    mutationFn: (file: File) => userService.updateAvatar(file),

    onError: (error: AxiosError<{ message?: string }>) => {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Ошибка обновления изображения профиля.');
      }
    },
  });

  return { mutate };
};
