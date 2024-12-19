import { IProfile } from '../user.types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IUpdateUserState, IUserState } from './types';

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
        userData: IProfile | null;
        isAuthorized: boolean;
      }>
    ) => {
      state.userData = payload.payload.userData;
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
