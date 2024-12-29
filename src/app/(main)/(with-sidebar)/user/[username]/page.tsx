import { Metadata } from 'next';

import UserPage from '@/widgets/user-page/ui/userPage';

export async function generateMetadata({
  params
}: {
  params: Promise<{ username: string }>;
}): Promise<Metadata> {
  const { username } = await params;
  const processedUsername = decodeURIComponent(username.trim());

  return {
    title: `${processedUsername}`
  };
}

export default async function Page({
  params
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const processedUsername = decodeURIComponent(username.trim());

  return <UserPage name={processedUsername} />;
}
