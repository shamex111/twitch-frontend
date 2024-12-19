import { axiosAPI } from '@/shared/config';
import { SERVER_ROUTES } from '@/shared/routes';
import { IResponse } from '@/shared/types';

import {
  IBan,
  ICheckUserStatus,
  ICreateBan,
  IModeratorAssign,
  IModeratorRemove,
  IUnbun
} from './moderator.types';

class ModeratorService {
  public async assign(data: IModeratorAssign) {
    return axiosAPI.post<IModeratorAssign>(
      SERVER_ROUTES.moderatorsAssign(),
      data
    );
  }

  public async remove(data: IModeratorRemove) {
    return axiosAPI.delete<IResponse>(SERVER_ROUTES.moderatorsRemove(), {
      data
    });
  }

  public async checkUserStatus(data: ICheckUserStatus) {
    return axiosAPI.post<IBan | null>(
      SERVER_ROUTES.moderatorCheckUserStatus(),
      data
    );
  }

  public async ban(data: ICreateBan) {
    return axiosAPI.post<IBan>(SERVER_ROUTES.moderatorBan(), data);
  }
  public async unban(data: IUnbun) {
    return axiosAPI.delete<IResponse>(SERVER_ROUTES.moderatorUnban(), { data });
  }
}

export const moderatorService = new ModeratorService();
