import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';

import { sessionService } from '@/entities/session';

export const RemoveSessionMutation = () => {
  const { mutate } = useMutation({
    mutationKey: ['remove session'],
    mutationFn: (id: string) => {
      return sessionService.remove(id);
    },
    onSuccess:() => {
      toast.success("Сессия сброшена.")
      
    },
    onError(error: AxiosError<{ message?: string }>) {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Ошибка сброса сессии.');
      }
    }
  });
  return { mutate };
};
