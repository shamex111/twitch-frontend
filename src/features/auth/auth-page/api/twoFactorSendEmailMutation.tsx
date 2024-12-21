import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';

import { twoFactorAuthService } from '@/entities/two-factor';

export const TwoFactorSendEmailMutation = () => {
  const { mutate } = useMutation({
    mutationKey: ['send two factor email'],
    mutationFn: (email: string) => {
      toast.success('Cообщение c кодом отправлено на вашу почту.');
      return twoFactorAuthService.sendEmail({ email });
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
