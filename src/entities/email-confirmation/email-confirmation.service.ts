import { axiosAPI } from '@/shared/config';
import { SERVER_ROUTES } from '@/shared/routes';

import { IConfirmation, IConfirmationSend } from './email-confirmation.types';

class EmailConfirmation {
  public async confirmation(data: IConfirmation) {
    return axiosAPI.post<true>(SERVER_ROUTES.emailConfirmation(), data);
  }
  public async sendConfirmation(data: IConfirmationSend) {
    return axiosAPI.post<true>(SERVER_ROUTES.emailConfirmationSend(), data);
  }
}

export const emailConfirmation = new EmailConfirmation();
