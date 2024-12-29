import MainContent from '@/widgets/main-content/ui/mainContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Главная'
};

export default function Page() {
  return <div className='overflow-y-auto'>
        <MainContent/>
  </div>;
}
