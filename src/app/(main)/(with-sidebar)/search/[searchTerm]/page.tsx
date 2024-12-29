import { Metadata } from 'next';

import Search from '@/widgets/search/ui/search';

export async function generateMetadata({
  params
}: {
  params: Promise<{ searchTerm: string }>;
}): Promise<Metadata> {
  const { searchTerm } = await params;
  const processedSearchTerm = decodeURIComponent(searchTerm.trim());

  return {
    title: `Поиск - ${processedSearchTerm}`
  };
}

export default async function Page({
  params
}: {
  params: Promise<{ searchTerm: string }>;
}) {
  const { searchTerm } = await params;
  const processedSearchTerm = decodeURIComponent(searchTerm.trim());

  return <Search searchTerm={processedSearchTerm} />;
}
