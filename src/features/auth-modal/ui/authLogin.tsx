'use client';

import { loginMutation } from '../api';
import { useRecaptcha } from '../hooks';
import Link from 'next/link';
import { FC } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { RECAPTCHA_SITE_SECRET } from '@/shared/constants';
import { APP_ROUTES } from '@/shared/routes';
import { Button } from '@/shared/ui/button';

import { ILoginForm } from '@/entities/auth';

import styles from './auth.module.scss';
import AuthLoginFields from './authLoginFields';
import SocialVariants from './socialVariants';

const AuthRegister: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ILoginForm>({
    mode: 'onChange'
  });

  const { captchaToken, handleCaptchaChange } = useRecaptcha();

  const { mutate } = loginMutation(captchaToken, reset);

  const onSubmit: SubmitHandler<ILoginForm> = (data: ILoginForm) => {
    if (!captchaToken) {
      toast.error('Завершите проверку капчи!');
      return;
    }
    mutate(data);
  };

  return (
    <div className={styles.authWrapper}>
      <div className={styles.header}>Войти</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthLoginFields register={register} errors={errors} />
        <div className={styles.recaptcha}>
          <ReCAPTCHA
            sitekey={RECAPTCHA_SITE_SECRET}
            onChange={handleCaptchaChange}
          />
        </div>
        <Button
          size="lg"
          variant="accent"
          className={`${styles.button}`}
          type="submit"
        >
          Войти
        </Button>
      </form>
      <Link href={APP_ROUTES.register()} className={styles.otherVariant}>
        Еще нет аккаунта? Зарегистрироваться
      </Link>
      <SocialVariants />
    </div>
  );
};

export default AuthRegister;
