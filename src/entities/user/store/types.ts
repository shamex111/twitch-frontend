import { IProfile } from '../user.types';

export interface IUserState {
  userData: IProfile | null;
  isLoading: boolean;
  isAuthorized:boolean
}
