import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';

import { ICreateDescriptionPart, channelService } from '@/entities/channel';

export const createDescriptionPartMutation = () => {
  const { mutate } = useMutation({
    mutationKey: ['create description part'],
    mutationFn: (data: { data: ICreateDescriptionPart; file: File }) =>
      channelService.createDescriptionPart(data.data, data.file),

    onError: (error: AxiosError<{ message?: string }>) => {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Ошибка создания картинки-ссылки.');
      }
    },
    onSuccess: () => toast.success('Картинка-ссылка успешно создана.')
  });

  return { mutate };
};
