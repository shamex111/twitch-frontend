export interface IUserState {
  userData: IUserData | null;
  isLoading: boolean;
  isAuthorized: boolean;
}

export interface IUserData {
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
  streamId: string | null;
  balance: number;
  createdAt: string;
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
