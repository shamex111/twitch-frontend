import { Metadata } from 'next';
import { FC } from 'react';

import Settings from '@/widgets/settings/ui/settings';

export const metadata: Metadata = {
  title: 'Настройки'
};

const Page: FC = () => {
  return <Settings />;
};

export default Page;
