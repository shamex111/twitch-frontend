import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';

import { passwordRecovery } from '@/entities/password-recovery';

export const PasswordRecoverySendEmailMutation = () => {
  const { mutate } = useMutation({
    mutationKey: ['send email password recovery'],
    mutationFn: (email: string) => {
      toast.success(
        'Cообщение c кодом для изменения пароля отправлено на вашу почту.'
      );
      return passwordRecovery.sendPasswordRecovery({ email });
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
