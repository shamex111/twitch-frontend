'use client';

import { registerMutation } from '../api';
import { useRecaptcha } from '../hooks';
import Link from 'next/link';
import { FC } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { RECAPTCHA_SITE_SECRET } from '@/shared/constants';
import { APP_ROUTES } from '@/shared/routes';
import { Button } from '@/shared/ui/button';

import { IRegisterForm } from '@/entities/auth';

import styles from './auth.module.scss';
import AuthRegisterFields from './authRegisterFields';
import SocialVariants from './socialVariants';

const AuthRegister: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues
  } = useForm<IRegisterForm>({
    mode: 'onChange'
  });

  const { captchaToken, handleCaptchaChange } = useRecaptcha();
  const { mutate } = registerMutation(captchaToken, reset);

  const onSubmit: SubmitHandler<IRegisterForm> = (data: IRegisterForm) => {
    if (!captchaToken) {
      toast.error('Завершите проверку капчи!');
      return;
    }
    mutate(data);
  };

  return (
    <div className={styles.authWrapper}>
      <div className={styles.header}>Зарегистрироваться</div>
      <div className={styles.info}>
        Зарегестрировавшись, вы получите полный доступ ко всем функциям сайта,
        сможете писать в чат, создавать транслиции и многое другое!
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthRegisterFields
          register={register}
          errors={errors}
          getValues={getValues}
        />{' '}
        <div className={styles.recaptcha}>
          <ReCAPTCHA
            sitekey={RECAPTCHA_SITE_SECRET}
            onChange={handleCaptchaChange}
          />
        </div>
        <Button
          variant="accent"
          className={styles.button}
          type="submit"
          size="lg"
        >
          Зарегистрироваться
        </Button>
      </form>
      <Link href={APP_ROUTES.signIn()} className={styles.otherVariant}>
        Уже есть аккаунт? Войти
      </Link>
      <SocialVariants />
    </div>
  );
};

export default AuthRegister;
