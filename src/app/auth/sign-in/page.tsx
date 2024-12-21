import type { Metadata } from 'next';

import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants';
import AuthLogin from '@/features/auth/auth-page/ui/auth-login/authLogin';


export const metadata: Metadata = {
  title: 'Вход',
  ...NO_INDEX_PAGE
};

export default function Page() {
  return (
      <AuthLogin />
  );
}
