import { IUser } from '../user';

export interface ICreateReward {
  name: string;
  description: string;
  price: string;
}

export interface IDeleteReward {
  userRewardId: string;
}

export interface IBuyReward {
  rewardId: string;
}
export interface IBuyerReward {
  id: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  rewardId: string;
}
