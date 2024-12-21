import type { Metadata } from 'next';

import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants';
import AuthRegister from '@/features/auth/auth-page/ui/auth-register/authRegister';


export const metadata: Metadata = {
  title: 'Регистрация',
  ...NO_INDEX_PAGE
};

export default function Page() {
  return <AuthRegister />
}
