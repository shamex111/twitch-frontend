import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';

import { emailChangeService } from '@/entities/email-change';

export const EmailChangeSendEmailMutation = () => {
  const { mutate } = useMutation({
    mutationKey: ['send email change email'],
    mutationFn: (email: string) => {
      toast.success(
        'Cообщение c кодом для изменения почты отправлено на вашу почту.'
      );
      return emailChangeService.sendEmailChange({ email });
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
