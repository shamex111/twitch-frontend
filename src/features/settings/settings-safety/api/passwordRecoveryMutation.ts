import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';

import {
  INewPasswordDto,
  passwordRecovery
} from '@/entities/password-recovery';

export const PasswordRecoveryMutation = () => {
  const { mutate } = useMutation({
    mutationKey: ['password recovery'],
    mutationFn: (data: INewPasswordDto) => {
      return passwordRecovery.recovery(data);
    },
    onError(error: AxiosError<{ message?: string }>) {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Ошибка изменения пароля.');
      }
    }
  });
  return { mutate };
};
