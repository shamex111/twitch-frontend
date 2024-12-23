import { sessionService } from '@/entities/session';
import { useQuery } from '@tanstack/react-query';


export const sessionsQuery = () => {
  const { data, isLoading, error,refetch } = useQuery({
    queryKey: ['get user sessions'],
    queryFn: () => sessionService.allSessions(),
    select: data => data,
  });
  return { data, isLoading, error ,refetch};
};
