import { axiosAPI } from '@/shared/config';
import { SERVER_ROUTES } from '@/shared/routes';
import { IResponse } from '@/shared/types';

import {
  CreateEmote,
  DeleteEmote,
  ICreateDescriptionPart,
  IDeleteDescriptionPart,
  IDescriptionPart,
  IEmote,
  IFollow,
  IUnfollow
} from './channel.types';

class ChannelService {
  public async follow(data: IFollow) {
    return axiosAPI.post<IFollow>(SERVER_ROUTES.channelFollow(), data);
  }

  public async unfollow(data: IUnfollow) {
    return axiosAPI.post<IResponse>(SERVER_ROUTES.channelUnfollow(), data);
  }

  public async createDescriptionPart(data: ICreateDescriptionPart, file: File) {
    const formData = new FormData();
    formData.append('description', data.description);
    formData.append('url', data.url);
    formData.append('file', file);
    return axiosAPI.post<IDescriptionPart>(
      SERVER_ROUTES.channelCreateDescriptionPart(),
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
  }
  public async deleteDescriptionPart(data: IDeleteDescriptionPart) {
    return axiosAPI.delete<IResponse>(
      SERVER_ROUTES.channelDeleteDescriptionPart(),
      { data }
    );
  }

  public async createEmote(data: CreateEmote, file: File) {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('file', file);
    return axiosAPI.post<IEmote>(
      SERVER_ROUTES.channelCreateDescriptionPart(),
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
  }

  public async deleteEmote(data: DeleteEmote) {
    return axiosAPI.delete<IResponse>(SERVER_ROUTES.deleteEmote(), { data });
  }
}

export const channelService = new ChannelService();
