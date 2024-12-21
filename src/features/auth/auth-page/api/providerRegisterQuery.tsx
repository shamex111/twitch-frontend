import { useQuery } from '@tanstack/react-query';

import { TProvider, authService } from '@/entities/auth';

export const providerRegisterQuery = (provider: TProvider | undefined) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['get provider oauth link'],
    queryFn: () => authService.provider(provider as TProvider),
    select: data => data,
    enabled: !!provider
  });
  return { data, isLoading, error };
};
