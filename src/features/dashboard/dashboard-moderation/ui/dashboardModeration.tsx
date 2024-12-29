'use client';

import { FC } from 'react';

import { userQuery } from '@/entities/user/api';

import styles from './dashboardModeration.module.scss';

const DashboardModeration: FC = () => {
  const { isLoading, error, data } = userQuery(true);
  if (isLoading) {
    return <div className="text-White">Loading...</div>;
  }
  if (error) {
    return <div className="text-White">Error occurred</div>;
  }
  const userData = data?.data;

  return <div className={styles.dashboardModerationWrapper}></div>;
};

export default DashboardModeration;
