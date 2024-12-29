import AppSidebar from '@/widgets/app-sidebar/ui/appSidebar';

export default function layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex bg-Modal">
      <AppSidebar />
      <div className=" w-full border-t-[1px] bg-Main border-l-[1px] rounded-tl-xl border-Border">
        {children}
      </div>
    </div>
  );
}
