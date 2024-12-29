import { axiosAPI } from '@/shared/config';
import { SERVER_ROUTES } from '@/shared/routes';

import {
  IBuySubscription,
  ICreateSubscription,
  IEditSubscription,
  IPaymentStatus,
  ISubscriber,
  IUserSubscription
} from './subscription.types';

class SubscriptionService {
  public async userSubscriber(streamerId: string, userId: string) {
    return axiosAPI.get<ISubscriber | null>(
      SERVER_ROUTES.subscriptionUserSubscriber(streamerId, userId)
    );
  }
  public async getSubscription(streamerId: string) {
    return axiosAPI.get<IUserSubscription | null>(
      SERVER_ROUTES.subscriptionSubscription(streamerId)
    );
  }

  public async create(data: ICreateSubscription, file: File) {
    const formData = new FormData();
    formData.append('file', file);
    if (data?.price !== undefined) formData.append('price', data.price);

    return axiosAPI.post<IUserSubscription>(
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
    return axiosAPI.patch<IUserSubscription>(
      SERVER_ROUTES.subscriptionChange(),
      data
    );
  }

  public async editIcon(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    return axiosAPI.patch<IUserSubscription>(
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
