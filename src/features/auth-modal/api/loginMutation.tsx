import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

import { APP_ROUTES } from '@/shared/routes';

import { ILoginForm, authService } from '@/entities/auth';
import { UseFormReset } from 'react-hook-form';

export const loginMutation = (captchaToken:string,reset:UseFormReset<ILoginForm>) => {
  const { refresh, push } = useRouter();
  const { mutate } = useMutation({
    mutationKey: ['login'],
    mutationFn: (data: ILoginForm) => authService.login(data,captchaToken),
    onSuccess: () => {
      toast.success('Успешный вход');
      reset()
      push(APP_ROUTES.home());
      refresh();
    },
    onError(error: AxiosError<{ message?: string }>) {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Ошибка');
      }
    }
  });
  return { mutate };
};
