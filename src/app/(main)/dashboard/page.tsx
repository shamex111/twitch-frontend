import type { Metadata } from 'next';

import Dashboard from '@/widgets/dashboard/ui/dashboard';

export const metadata: Metadata = {
  title: 'Панель управления автора'
};

export default function Page() {
  return (
    <div className='w-full border-t-[1px] border-Border'>
      <Dashboard /> 
    </div>
  );
}
