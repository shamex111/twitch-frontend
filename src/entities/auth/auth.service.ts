import { IProfile } from '../user';

import { axiosAPI } from '@/shared/config';
import { SERVER_ROUTES } from '@/shared/routes';

import { ILoginForm, IRegisterForm, TProvider } from './auth.types';

export const COOKIE_SESSION_NAME = 'session';

class AuthService {
  public async checkStatus() {
    return axiosAPI.get<boolean>(SERVER_ROUTES.checkStatus());
  }

  public async register(data: IRegisterForm, captchaToken: string) {
    return axiosAPI.post<IProfile>(SERVER_ROUTES.register(), data, {
      headers: {
        recaptcha: captchaToken
      }
    });
  }

  public async login(data: ILoginForm, captchaToken: string) {
    return axiosAPI.post<IProfile>(SERVER_ROUTES.login(), data, {
      headers: {
        recaptcha: captchaToken
      }
    });
  }

  public async provider(provider: TProvider) {
    return axiosAPI.get(SERVER_ROUTES.provider(provider));
  }
}

export const authService = new AuthService();
