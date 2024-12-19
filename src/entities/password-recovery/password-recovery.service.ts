import { axiosAPI } from '@/shared/config';
import { SERVER_ROUTES } from '@/shared/routes';

import {
  INewPasswordDto,
  ISendPasswordRecovery
} from './password-recovery.types';

class PasswordRecovery {
  public async sendPasswordRecovery(data: ISendPasswordRecovery) {
    return axiosAPI.post<true>(SERVER_ROUTES.sendPasswordRecovery(), data);
  }

  public async recovery(data: INewPasswordDto) {
    return axiosAPI.post<true>(SERVER_ROUTES.passwordRecovery(), data);
  }
}

export const passwordRecovery = new PasswordRecovery();
