import { userService } from '../user.service';
import { useQuery } from '@tanstack/react-query';

export const userGetByNameQuery = (name: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['get user by name'],
    queryFn: () => userService.findByName(name),
    select: data => data
  });
  return { data, isLoading, error };
};
