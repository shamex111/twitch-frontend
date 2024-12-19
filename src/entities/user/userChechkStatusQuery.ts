import { authService } from '../auth';
import { useQuery } from '@tanstack/react-query';

export const userCheckStatusQuery = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['get user status'],
    queryFn: () => authService.checkStatus(),
    select: data => data
  });
  return { data, isLoading, error };
};
