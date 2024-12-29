import { channelService } from '../channel.service';
import { useQuery } from '@tanstack/react-query';

export const followerQuery = (streamerId: string, userId: string) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['getFollower', streamerId, userId],
    queryFn: () => channelService.userFollower(streamerId, userId),
    select: data => data
  });
  return { data, isLoading, error, refetch };
};
