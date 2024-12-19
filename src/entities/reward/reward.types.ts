export interface ICreateReward {
  name: string;
  description: string;
  price: string;
}

export interface IDeleteReward {
  userRewardId: string;
}

export interface IBuyReward{
  rewardId:string
}