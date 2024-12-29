import { Metadata } from 'next';

import Stream from '@/widgets/stream/ui/stream';

export async function generateMetadata({
  params
}: {
  params: Promise<{ username: string }>;
}): Promise<Metadata> {
  const { username } = await params;
  const processedUsername = decodeURIComponent(username.trim());


  return {
    title: `стрим - ${processedUsername}`
  };
}

export default async function Page({
  params
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const processedUsername = decodeURIComponent(username.trim());

  return <Stream name={processedUsername} />;
}
