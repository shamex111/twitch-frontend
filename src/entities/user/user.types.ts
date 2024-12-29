import { IDescriptionPart, IEmote, IFollower } from '../channel';
import { IChat, IMessage } from '../chat';
import { ICurrency, ICurrencyBalance } from '../currency';
import { IBan, IModerator } from '../moderator';
import { IBuyReward, IBuyerReward } from '../reward';
import { ISubscription, IUserSubscription } from '../subscription';

export interface IProfile {
  id: string;
  email: string;
  name: string;
  avatar: string;
  description: string;
  banner: string;
  isVerified: boolean;
  isTwoFactorEnabled: boolean;
  color: string;
  countFollowers: number;
  descriptionParts: IDescriptionPart[];
  following: IFollower[];
  followers: IFollower[];
  bans: IBan[];
  issuedBans: IBan[];
  userModerators: IModerator[];
  appointedModerators: IModerator[];
  streamerCurrency: ICurrency[];
  currencyBalance: ICurrencyBalance[];
  userRewards: IBuyReward[];
  boughtRewards: IBuyerReward[];
  subscriptions: ISubscription[];
  subscribers: ISubscription[];
  emotes: IEmote[];
  message: IMessage[];
  streamId: string | null;
  chat: IChat[];
  method: AuthMethod;
  userSubscription: IUserSubscription[];
  balance: number;
  createdAt: string;
  updatedAt: string;
  // stream: IStreamStats | null;
  // streamStats: IStreamStats [];
  // receivedNotifications: INotification[];
  // sentNotifications: INotification[];
}

export interface IUser
  extends Omit<
    IProfile,
    'isVerified' | 'isTwoFactorEnabled' | 'balance' | 'updatedAt'
  > {}

export interface IUpdateUser {
  name?: string;
  description?: string;
  color?: string;
  isTwoFactorEnabled?: boolean;
  code?: string;
}

enum AuthMethod {
  CREDENTIALS = 'CREDENTIALS',
  GOOGLE = 'GOOGLE',
  YANDEX = 'YANDEX',
  GITHUB = 'GITHUB'
}
