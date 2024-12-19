import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

import { sessionService } from '@/entities/session';
import { APP_ROUTES } from '@/shared/routes';

export const logoutMutation = () => {
  const {push,refresh} = useRouter();
  const { mutate } = useMutation({
    mutationKey: ['logout'],
    mutationFn: () => sessionService.logout(),
    onSuccess: () => {
      toast.success('Вы вышли из аккаунта.');
      push(APP_ROUTES.home());
      refresh()
    },
    onError(error: AxiosError<{ message?: string }>) {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Ошибка выхода из аккаунта.');
      }
    }
  });
  return { mutate };
};
