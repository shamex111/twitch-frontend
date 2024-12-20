import AppSidebar from '@/widgets/app-sidebar/ui/appSidebar';

export default function layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <AppSidebar />
      <div className="w-full border-t-[1px] border-Border">
        {children}
      </div>
    </div>
  );
}
