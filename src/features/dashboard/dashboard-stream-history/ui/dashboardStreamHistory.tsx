'use client';

import { FC } from 'react';

import { userQuery } from '@/entities/user/api';

import styles from './dashboardStreamHistory.module.scss';

const DashboardStreamHistory: FC = () => {
  const { isLoading, error, data } = userQuery(true);
  if (isLoading) {
    return <div className="text-White">Loading...</div>;
  }
  if (error) {
    return <div className="text-White">Error occurred</div>;
  }
  const userData = data?.data;

  return <div className={styles.dashboardStreamHistoryWrapper}></div>;
};

export default DashboardStreamHistory;
