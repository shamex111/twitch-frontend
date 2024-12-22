import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';

import { IChangeEmail, emailChangeService } from '@/entities/email-change';

export const EmailChangeMutation = () => {
  const { mutate } = useMutation({
    mutationKey: ['email change'],
    mutationFn: (data: IChangeEmail) => {
      return emailChangeService.emailChange(data);
    },
    onError(error: AxiosError<{ message?: string }>) {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Ошибка изменения email.');
      }
    }
  });
  return { mutate };
};
