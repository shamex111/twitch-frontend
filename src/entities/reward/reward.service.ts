import { axiosAPI } from '@/shared/config';
import { SERVER_ROUTES } from '@/shared/routes';

import { IBuyReward, ICreateReward, IDeleteReward } from './reward.types';

class RewardService {
  public async create(data: ICreateReward, file: File) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('description', data.description);
    formData.append('name', data.name);
    formData.append('price', data.price);
    return axiosAPI.post(SERVER_ROUTES.rewardsCreate(), formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }

  public async delete(data: IDeleteReward) {
    return axiosAPI.delete(SERVER_ROUTES.rewardsDelete(), { data });
  }

  public async buyReward(data: IBuyReward) {
    return axiosAPI.post(SERVER_ROUTES.rewardsBuyReward(), data);
  }
}

export const rewardService = new RewardService();
