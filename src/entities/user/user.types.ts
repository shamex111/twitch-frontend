import { IDescriptionPart } from "../channel";

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
  streamId: string;
  method: AuthMethod;
  balance: number;
  createdAt: string;
  updatedAt: string;
  descriptionParts:IDescriptionPart[]
}



export interface IUser
  extends Omit<
    IProfile,
    'isVerified' | 'isTwoFactorEnabled' | 'method' | 'balance' | 'updatedAt'
  > {}

export interface IUpdateUser {
  name?: string;
  description?: string;
  banner?: string;
  color?: string;
  isTwoFactorEnabled: boolean;
  code?: string;
}

enum AuthMethod {
  CREDENTIALS = 'CREDENTIALS',
  GOOGLE = 'GOOGLE',
  YANDEX = 'YANDEX',
  GITHUB = 'GITHUB'
}
