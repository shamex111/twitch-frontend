'use client';

import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';

import { userSelector } from '@/entities/user/store';

import DashboardChannel from '@/features/dashboard/dashboard-channel/ui/dashboardChannel';
import DashboardCurrency from '@/features/dashboard/dashboard-currency/ui/dashboardCurrency';
import DashboardEmoji from '@/features/dashboard/dashboard-emoji/ui/dashboardEmoji';
import DashboardModeration from '@/features/dashboard/dashboard-moderation/ui/dashboardModeration';
import DashboardSidebar from '@/features/dashboard/dashboard-sidebar/ui/dashboardSidebar';
import DashboardStreamAnalytic from '@/features/dashboard/dashboard-stream-analytic/ui/dashboardStreamAnalytic';
import DashboardStreamHistory from '@/features/dashboard/dashboard-stream-history/ui/dashboardStreamHistory';
import DashboardSubscription from '@/features/dashboard/dashboard-subscription/ui/dashboardSubscription';
import DashboardTranslation from '@/features/dashboard/dashboard-translation/ui/dashboardTranslation';

import styles from './dashboard.module.scss';

export type TDashboardTabs =
  | 'translation'
  | 'stream-history'
  | 'stream-analytic'
  | 'channel'
  | 'moderation'
  | 'currency'
  | 'subscription'
  | 'emotions';

const Dashboard: FC = () => {
  const { isAuthorized, isLoading, userData } = useSelector(userSelector);
  const [activeTab, setActiveTab] = useState<TDashboardTabs>('channel');
  const { push } = useRouter();
  if (!isAuthorized && !isLoading) {
    push('/');
  }
  if (!userData || isLoading) return <div>loading</div>;
  return (
    <div className={styles.dashboardWrapper}>
      <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'translation' && <DashboardTranslation />}
      {activeTab === 'stream-history' && <DashboardStreamHistory />}
      {activeTab === 'stream-analytic' && <DashboardStreamAnalytic />}
      {activeTab === 'channel' && <DashboardChannel userId={userData?.id} />}
      {activeTab === 'moderation' && <DashboardModeration />}
      {activeTab === 'currency' && <DashboardCurrency />}
      {activeTab === 'subscription' && <DashboardSubscription />}
      {activeTab === 'emotions' && <DashboardEmoji />}
    </div>
  );
};

export default Dashboard;
