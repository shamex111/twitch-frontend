import { axiosAPI } from '@/shared/config';
import { SERVER_ROUTES } from '@/shared/routes';

import {
  ISendTwoFactorEmail,
  ISendTwoFactorResetEmail
} from './two-factor.types';

class TwoFactorAuthService {
  public async sendResetEmail(data: ISendTwoFactorResetEmail) {
    return axiosAPI.post<true>(SERVER_ROUTES.twoFactorEmailReset(), data);
  }
  public async sendEmail(data: ISendTwoFactorEmail) {
    return axiosAPI.post<true>(SERVER_ROUTES.twoFactorEmailSend(), data);
  }
}

export const twoFactorAuthService = new TwoFactorAuthService();
