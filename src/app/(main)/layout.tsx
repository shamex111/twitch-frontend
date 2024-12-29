import UserGetData from '@/entities/user/api/userGetData';

import AppHeader from '@/widgets/app-header/ui/appHeader';

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <UserGetData />
      <AppHeader />
      <div className="mt-[93px]">{children}</div>
    </>
  );
}
