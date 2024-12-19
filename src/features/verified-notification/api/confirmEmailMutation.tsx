import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';

import { emailConfirmation } from '@/entities/email-confirmation';

export const confirmEmailMutation = () => {
  const { mutate } = useMutation({
    mutationKey: ['confirm email'],
    mutationFn: (token: string) => {
      return emailConfirmation.confirmation({ token });
    },
    onError(error: AxiosError<{ message?: string }>) {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Ошибка подтверждения email.');
      }
    }
  });
  return { mutate };
};
