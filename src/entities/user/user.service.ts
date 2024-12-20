import { axiosAPI } from '@/shared/config';
import { SERVER_ROUTES } from '@/shared/routes';

import { IProfile, IUpdateUser, IUser } from './user.types';

class UserService {
  public async profile() {
    return axiosAPI.get<IProfile>(SERVER_ROUTES.usersProfile());
  }

  public async update(data: IUpdateUser) {
    return axiosAPI.patch<IProfile>(SERVER_ROUTES.usersUpdate(), data);
  }
  public async updateAvatar(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    return axiosAPI.patch(SERVER_ROUTES.usersUpdateAvatar(), formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }
  public async updateBanner(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    return axiosAPI.patch(SERVER_ROUTES.usersUpdateBanner(), formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }

  public async find(searchTerm: string) {
    return axiosAPI.get<IUser[]>(SERVER_ROUTES.usersFind(searchTerm));
  }

  public async findByName(name: string) {
    return axiosAPI.get<IUser>(SERVER_ROUTES.usersFindByName(name));
  }
}

export const userService = new UserService();
