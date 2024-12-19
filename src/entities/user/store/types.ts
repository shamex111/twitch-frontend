import { IProfile } from '../user.types';

export interface IUserState {
  userData: IProfile | null;
  isLoading: boolean;
  isAuthorized: boolean;
}

export interface IUpdateUserState {
  id?: string;
  email?: string;
  name?: string;
  avatar?: string;
  description?: string;
  banner?: string;
  isVerified?: boolean;
  isTwoFactorEnabled?: boolean;
  color?: string;
  countFollowers?: number;
  streamId?: string;
  balance?: number;
}
