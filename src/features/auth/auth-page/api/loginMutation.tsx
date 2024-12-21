import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';



import { ILoginForm, authService } from '@/entities/auth';
export const loginMutation = (
  captchaToken: string,
) => {
  const { mutate } = useMutation({
    mutationKey: ['login'],
    mutationFn: (data: ILoginForm) => authService.login(data, captchaToken),
  
    onError: (error: AxiosError<{ message?: string }>) => {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Ошибка входа.');
      }
    }
  });

  return { mutate };
};
