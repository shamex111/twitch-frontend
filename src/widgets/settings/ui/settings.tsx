'use client';

import { FC, useState } from 'react';
import { useSelector } from 'react-redux';

import { ISession } from '@/entities/session';
import { userSelector } from '@/entities/user/store';

import SettingsProfile from '@/features/settings/settings-profile/ui/settingsProfile';
import SettingsSafety from '@/features/settings/settings-safety/ui/settingsSafety';

import styles from './settings.module.scss';

type TSettingsTabs = 'profile' | 'safety';

const Settings: FC = () => {
  const { isLoading, isAuthorized, userData } = useSelector(userSelector);
  const [activeTab, setActiveTab] = useState<TSettingsTabs>('profile');
  if (isLoading) {
    return <div>load</div>;
  }

  return (
    <div className={styles.settingsWrapper}>
      <div className={styles.heading}>НАСТРОЙКИ</div>
      <div className={styles.tabs}>
        <div
          onClick={() => setActiveTab('profile')}
          className={`${styles.tab} ${activeTab === 'profile' && styles.activeTab}`}
        >
          Профиль
        </div>
        <div
          onClick={() => setActiveTab('safety')}
          className={`${styles.tab} ${activeTab === 'safety' && styles.activeTab}`}
        >
          Безопасность
        </div>
      </div>
      <div className={styles.content}>
        {activeTab === 'profile' && (
          <SettingsProfile
            name={userData?.name as string}
            description={userData?.description as string}
            avatar={userData?.avatar as string}
            banner={userData?.banner as string}
          />
        )}
        {activeTab === 'safety' && (
          <SettingsSafety
            email={userData?.email as string}
            isTwoFactorEnabled={userData?.isTwoFactorEnabled as boolean}
          />
        )}
      </div>
    </div>
  );
};

export default Settings;
