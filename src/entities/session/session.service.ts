import { axiosAPI } from '@/shared/config';
import { SERVER_ROUTES } from '@/shared/routes';
import { IResponse } from '@/shared/types';

import { ISession } from './session.types';

class SessionService {
  public async allSessions() {
    return axiosAPI.get<ISession[]>(SERVER_ROUTES.sessionsAll());
  }
  public async currentSession() {
    return axiosAPI.get<ISession>(SERVER_ROUTES.sessionsCurrent());
  }
  public async remove(id: string) {
    return axiosAPI.delete<IResponse>(SERVER_ROUTES.sessionsRemove(id));
  }
  public async logout() {
    return axiosAPI.post<void>(SERVER_ROUTES.logout());
  }
}

export const sessionService = new SessionService();
