export const APP_URL = process.env.APP_URL;

export const APP_ROUTES = {
  root: (url = '') => APP_URL + url,
  
  home: () => APP_ROUTES.root(),
  signIn: () => APP_ROUTES.root('/auth/sign-in'),
  register: () => APP_ROUTES.root('/auth/register'),
  user: (name: string) => APP_ROUTES.root(`/${name}`),
  settings: () => APP_ROUTES.root('/settings'),
  dashboard: () => APP_ROUTES.root('/dashboard'),
  search: () => APP_ROUTES.root('/search'),
  stream: (id: string) => APP_ROUTES.root(`/stream/${id}`)
};
