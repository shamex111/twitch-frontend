import { useQuery } from '@tanstack/react-query';

import { userService } from '../user.service';

export const userQuery = (enabledData: boolean | undefined) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['get user profile'],
    queryFn: () => userService.profile(),
    select: data => data,
    enabled: !!enabledData
  });
  return { data, isLoading, error };
};
