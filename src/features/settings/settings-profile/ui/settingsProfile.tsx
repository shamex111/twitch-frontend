import {
  updateProfileAvatarMutation,
  updateProfileBannerMutation,
  updateProfileMutation
} from '../api';
import { FC, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input/input';

import { userActions } from '@/entities/user/store';

import styles from './settingsProfile.module.scss';

interface ISettingsProfile {
  name: string;
  avatar: string;
  description: string;
  banner: string;
}

const SettingsProfile: FC<ISettingsProfile> = ({
  name,
  avatar,
  description,
  banner
}) => {
  const [data, setData] = useState<{
    name: string;
    avatar: File | null;
    description: string;
    banner: File | null;
  }>({
    name,
    avatar: null,
    description,
    banner: null
  });

  const [isLoadings, setIsLoadings] = useState<
    Record<keyof typeof data, boolean>
  >({
    name: false,
    avatar: false,
    description: false,
    banner: false
  });

  const dispatch = useDispatch();

  const { mutate: defaultUpdateProfileMutation } = updateProfileMutation();
  const { mutate: avatarUpdateProfileMutation } = updateProfileAvatarMutation();
  const { mutate: bannerUpdateProfileMutation } = updateProfileBannerMutation();

  const handleFileChange =
    (field: 'avatar' | 'banner') =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] || null;
      setData(prevData => ({
        ...prevData,
        [field]: file
      }));
    };

  const updateProfile = (field: keyof typeof data) => {
    setIsLoadings(prev => ({ ...prev, [field]: true }));

    if (field === 'name' || field === 'description') {
      defaultUpdateProfileMutation(
        { [field]: data[field] },
        {
          onSuccess: () => {
            toast.success('Профиль успешно изменен.');
            dispatch(userActions.updateUser({ [field]: data[field] }));
            setIsLoadings(prev => ({ ...prev, [field]: false }));
          },
          onError: () => {
            setIsLoadings(prev => ({ ...prev, [field]: false }));
          }
        }
      );
    } else if (field === 'avatar' && data.avatar) {
      avatarUpdateProfileMutation(data.avatar, {
        onSuccess: res => {
          toast.success('Изображение профиля успешно изменено.');
          dispatch(userActions.updateUser({ avatar: res.data.avatar }));
          setData({ ...data, avatar: null });
          setIsLoadings(prev => ({ ...prev, [field]: false }));
        },
        onError: () => {
          setIsLoadings(prev => ({ ...prev, [field]: false }));
        }
      });
    } else if (field === 'banner' && data.banner) {
      bannerUpdateProfileMutation(data.banner, {
        onSuccess: res => {
          toast.success('Баннер профиля успешно изменен.');
          dispatch(userActions.updateUser({ banner: res.data.banner }));
          setData({ ...data, banner: null });
          setIsLoadings(prev => ({ ...prev, [field]: false }));
        },
        onError: () => {
          setIsLoadings(prev => ({ ...prev, [field]: false }));
        }
      });
    }
  };

  return (
    <div className={styles.settingsProfileWrapper}>
      <div className={styles.avatar}>
        <div className={styles.fields}>
          <div className={styles.label}>Изображение профиля</div>
          <Input
            type="file"
            placeholder="Изображение профиля"
            className={styles.input}
            onChange={handleFileChange('avatar')}
          />
        </div>
        {data.avatar && (
          <Button
            className={`${styles.button} ${isLoadings.avatar ? styles.loading : ''}`}
            onClick={() => updateProfile('avatar')}
            variant="accent"
            disabled={isLoadings.avatar}
          >
            {isLoadings.avatar ? 'Загрузка...' : 'Сохранить изменения'}
          </Button>
        )}
      </div>
      <div className={styles.banner}>
        <div className={styles.fields}>
          <div className={styles.label}>Баннер профиля</div>
          <Input
            type="file"
            placeholder="Баннер"
            className={styles.input}
            onChange={handleFileChange('banner')}
          />
        </div>
        {data.banner && (
          <Button
            className={`${styles.button} ${isLoadings.banner ? styles.loading : ''}`}
            onClick={() => updateProfile('banner')}
            variant="accent"
            disabled={isLoadings.banner}
          >
            {isLoadings.banner ? 'Загрузка...' : 'Сохранить изменения'}
          </Button>
        )}
      </div>
      <div className={styles.name}>
        <div className={styles.fields}>
          <div className={styles.label}>Имя пользователя</div>
          <Input
            type="text"
            placeholder="Имя пользователя"
            className={styles.input}
            value={data.name}
            onChange={e => setData({ ...data, name: e.target.value })}
          />
        </div>
        {data.name !== name && (
          <Button
            className={`${styles.button} ${isLoadings.name ? styles.loading : ''}`}
            onClick={() => updateProfile('name')}
            variant="accent"
            disabled={isLoadings.name}
          >
            {isLoadings.name ? 'Загрузка...' : 'Сохранить изменения'}
          </Button>
        )}
      </div>
      <div className={styles.description}>
        <div className={styles.fields}>
          <div className={styles.label}>Описание пользователя</div>
          <Input
            type="text"
            placeholder="Описание пользователя"
            className={styles.input}
            value={data.description}
            onChange={e => setData({ ...data, description: e.target.value })}
          />
        </div>
        {data.description !== description && (
          <Button
            className={`${styles.button} ${isLoadings.description ? styles.loading : ''}`}
            onClick={() => updateProfile('description')}
            variant="accent"
            disabled={isLoadings.description}
          >
            {isLoadings.description ? 'Загрузка...' : 'Сохранить изменения'}
          </Button>
        )}
      </div>
    </div>
  );
};

export default SettingsProfile;
