'use client';

import { FC, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

import { userActions } from './store';
import { userCheckStatusQuery } from './userChechkStatusQuery';
import { userQuery } from './userQuery';

const UserGetData: FC = () => {
  const dispatch = useDispatch();

  const {
    data: userStatusData,
    isLoading: userStatusIsLoading,
    error: userStatusError
  } = userCheckStatusQuery();

  const {
    data: userData,
    isLoading: userIsLoading,
    error: userError
  } = userQuery(userStatusData?.data);

  useEffect(() => {
    if (userStatusError) {
      toast.error('Ошибка при получении статуса пользователя.');
    }

    if (!userStatusData?.data && !userStatusIsLoading) {
      dispatch(userActions.setIsAuthorized(false));
      return;
    }
    if (userStatusIsLoading || userIsLoading) {
      dispatch(userActions.setIsLoading());
    }

    if (userError) {
      toast.error(
        `${userError.message || 'Ошибка при получении данных профиля.'}`
      );
      dispatch(userActions.setUser({ userData: null, isAuthorized: false }));
    }

    if (userData?.data) {
      dispatch(
        userActions.setUser({ userData: userData.data, isAuthorized: true })
      );
    }
  }, [
    dispatch,
    userStatusIsLoading,
    userStatusError,
    userIsLoading,
    userError,
    userData
  ]);

  return null;
};

export default UserGetData;
