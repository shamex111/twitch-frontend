import { axiosAPI } from '@/shared/config';
import { SERVER_ROUTES } from '@/shared/routes';

import { IChangeEmail, ISendEmailChange } from './email-change.types';

class EmailChange {
  public async sendEmailChange(data: ISendEmailChange) {
    return axiosAPI.post<true>(SERVER_ROUTES.sendEmailChange(), data);
  }
  public async emailChange(data: IChangeEmail) {
    return axiosAPI.post<true>(SERVER_ROUTES.emailChange(), data);
  }
}

export const emailChange = new EmailChange();
