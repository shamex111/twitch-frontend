import { Metadata } from 'next';

import UserPage from '@/widgets/user-page/ui/userPage';

export async function generateMetadata({
  params
}: {
  params: { username: string };
}): Promise<Metadata> {
  const username = params.username;

  return {
    title: `${username}`
  };
}

export default function Page({ params }: { params: { username: string } }) {
  const { username } = params;

  return <UserPage name={username} />;
}
