import { channelService } from '../channel.service';
import { useQuery } from '@tanstack/react-query';

export const followersQuery = (
  streamerId: string,
  count: number,
  startWith: number
) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['getFollowers', streamerId, startWith],
    queryFn: () => channelService.userFollowers(streamerId, count, startWith),
    select: data => data
  });

  return { data, isLoading, error, refetch };
};
