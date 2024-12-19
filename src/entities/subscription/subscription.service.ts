import { axiosAPI } from '@/shared/config';
import { SERVER_ROUTES } from '@/shared/routes';

import {
  IBuySubscription,
  ICreateSubscription,
  IEditSubscription,
  IPaymentStatus,
  ISubscription
} from './subscription.types';

class SubscriptionService {
  public async create(data: ICreateSubscription, file: File) {
    const formData = new FormData();
    formData.append('file', file);
    if (data?.price !== undefined) formData.append('price', data.price);

    return axiosAPI.post<ISubscription>(
      SERVER_ROUTES.subscriptionCreate(),
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
  }

  public async edit(data: IEditSubscription) {
    return axiosAPI.patch<ISubscription>(
      SERVER_ROUTES.subscriptionChange(),
      data
    );
  }

  public async editIcon(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    return axiosAPI.patch<ISubscription>(
      SERVER_ROUTES.subscriptionChangeIcon(),
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
  }

  public async buySubscription(data: IBuySubscription) {
    return axiosAPI.post<IPaymentStatus>(
      SERVER_ROUTES.subscriptionBuySubscription(),
      data
    );
  }
}

export const subscriptionService = new SubscriptionService();
