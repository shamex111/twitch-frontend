import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';

import { emailConfirmation } from '@/entities/email-confirmation';

export const sendVerificationEmailMutation = () => {
  const { mutate } = useMutation({
    mutationKey: ['send verification email'],
    mutationFn: (email: string) => {
      toast.success('Cообщение c кодом отправлено на вашу почту.');
      return emailConfirmation.sendConfirmation({ email });
    },
    onError(error: AxiosError<{ message?: string }>) {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Ошибка отправки email.');
      }
    }
  });
  return { mutate };
};
