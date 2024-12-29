import { subscriptionService } from '../subscription.service';
import { useQuery } from '@tanstack/react-query';

export const subscriberQuery = (streamerId: string, userId: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['getSubscriber', streamerId, userId],
    queryFn: () => subscriptionService.userSubscriber(streamerId, userId),
    select: data => data
  });
  return { data, isLoading, error };
};
