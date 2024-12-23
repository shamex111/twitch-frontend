import { sessionService } from '@/entities/session';
import { useQuery } from '@tanstack/react-query';


export const currentSessionQuery = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['get current session'],
    queryFn: () => sessionService.currentSession(),
    select: data => data,
  });
  return { data, isLoading, error };
};
