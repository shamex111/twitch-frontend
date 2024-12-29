import { subscriptionService } from '../subscription.service';
import { useQuery } from '@tanstack/react-query';

export const subscriptionQuery = (streamerId: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['getSubscription', streamerId],
    queryFn: () => subscriptionService.getSubscription(streamerId),
    select: data => data
  });
  return { data, isLoading, error };
};
