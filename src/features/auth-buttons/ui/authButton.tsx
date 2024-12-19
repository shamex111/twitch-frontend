'use client'
import Link from 'next/link';
import { FC } from 'react';

import { APP_ROUTES } from '@/shared/routes';
import { Button } from '@/shared/ui/button';

const AuthButton: FC = () => {
  return (
    <div className='my-auto flex space-x-5'>
      <Link href={APP_ROUTES.signIn()}>
        <Button variant="default">Войти</Button>
      </Link>
      <Link href={APP_ROUTES.register()}>
        <Button variant="accent">Зарегистрироваться</Button>
      </Link>
    </div>
  );
};

export default AuthButton;
