'use client';

import { AxiosResponse } from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { RECAPTCHA_SITE_SECRET } from '@/shared/constants';
import { useCodeHook } from '@/shared/hooks/codeHook';
import { APP_ROUTES } from '@/shared/routes';
import { IResponse } from '@/shared/types';
import { Button } from '@/shared/ui/button';

import { ILoginForm } from '@/entities/auth';
import { IProfile } from '@/entities/user';

import styles from '../auth.module.scss';
import AuthLoginFields from './authLoginFields';
import SocialVariants from '../social-variants/socialVariants';
import { useRecaptcha } from '../../hooks';
import { loginMutation } from '../../api';
import { TwoFactorSendEmailMutation } from '../../api/twoFactorSendEmailMutation';


const AuthLogin: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues
  } = useForm<ILoginForm>({
    mode: 'onChange'
  });
  const { refresh, push } = useRouter();

  const { captchaToken, handleCaptchaChange } = useRecaptcha();

  const { mutate: loginMutate } = loginMutation(captchaToken);

  const [isTwoFactor, setIsTwoFactor] = useState(false);

  const emailRef = useRef('');

  const { code, handleChange, handleBackspace } = useCodeHook();

  const handleTwoFactorSubmit = () => {
    const email = getValues('email');
    const password = getValues('password');

    const dataReq = {
      email,
      password,
      code: code.join('')
    };

    loginMutate(dataReq, {
      onSuccess: () => {
        toast.success('Успешный вход.');
        reset();
        push(APP_ROUTES.home());
        refresh();
      }
    });
  };

  const { mutate: twoFactorMutate } = TwoFactorSendEmailMutation();

  const handleSendEmail = () => {
    twoFactorMutate(emailRef.current);
  };

  const onSubmit: SubmitHandler<ILoginForm> = (data: ILoginForm) => {
    if (!captchaToken) {
      toast.error('Завершите проверку капчи!');
      return;
    }
    loginMutate(data, {
      onSuccess: (data: AxiosResponse<IResponse | { user: IProfile }>) => {
        if ((data.data as { user: IProfile })?.user?.email) {
          toast.success('Успешный вход.');
          reset();
          push(APP_ROUTES.home());
          refresh();
        } else if ((data.data as IResponse)?.message) {
          setIsTwoFactor(true);
          emailRef.current = (data.data as IResponse)?.email as string;
        }
      }
    });
  };

  if (isTwoFactor) {
    return (
      <div className={styles.authWrapper}>
        <div className={styles.header}>
          Подтверждение двухфакторной аутентификации
        </div>
        <div className={styles.infoTwoFactor}>
          Ваш код для подтверждения входа
        </div>
        <div className={styles.code}>
          {code.map((digit, index) => (
            <input
              key={index}
              id={`input-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={e => handleChange(e, index)}
              onKeyDown={e => handleBackspace(e, index)}
              className={styles.codeItem}
            />
          ))}
        </div>
        <div className={`${styles.recaptcha} mt-5`}>
          <ReCAPTCHA
            sitekey={RECAPTCHA_SITE_SECRET}
            onChange={handleCaptchaChange}
          />
        </div>
        <Button
          variant="accent"
          size="lg"
          onClick={handleTwoFactorSubmit}
          className={styles.submit}
        >
          Подтвердить
        </Button>
        <div onClick={handleSendEmail} className={styles.send}>
          Отправить код ещё раз
        </div>
      </div>
    );
  }

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

export default AuthLogin;
