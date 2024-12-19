import { userReducer } from '@/entities/user/store/userSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

export const reducers = combineReducers({
    userReducer
});

export const store = configureStore({
  reducer: reducers
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
