
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IUpdateUserState, IUserData, IUserState } from './types';
import { IProfile } from '../user.types';

const initialState: IUserState = {
  userData: null,
  isLoading: true,
  isAuthorized: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsLoading: state => {
      state.isLoading = true;
    },
    setIsAuthorized: (state, payload: PayloadAction<boolean>) => {
      state.isAuthorized = payload.payload;
      state.isLoading = false;
    },
    setUser: (
      state,
      payload: PayloadAction<{
        userData: IProfile | IUserData | null; 
        isAuthorized: boolean;
      }>
    ) => {
      if (payload.payload.userData === null) {
        state.userData = null;
      } else {
        state.userData = {
          id: payload.payload.userData.id,
          email: payload.payload.userData.email,
          name: payload.payload.userData.name,
          avatar: payload.payload.userData.avatar,
          description: payload.payload.userData.description,
          banner: payload.payload.userData.banner,
          isVerified: payload.payload.userData.isVerified,
          isTwoFactorEnabled: payload.payload.userData.isTwoFactorEnabled,
          color: payload.payload.userData.color,
          countFollowers: payload.payload.userData.countFollowers,
          streamId: payload.payload.userData.streamId,
          balance: payload.payload.userData.balance,
          createdAt: payload.payload.userData.createdAt
        };
      }
      state.isLoading = false;
      state.isAuthorized = true;
    },

    clearUser: state => {
      state.userData = null;
      state.isLoading = false;
      state.isAuthorized = false;
    },

    updateUser: (state, payload: PayloadAction<IUpdateUserState>) => {
      if (state.userData) {
        const updatedUserData = { ...state.userData, ...payload.payload };
        state.userData = updatedUserData;
      }
    }
  }
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
