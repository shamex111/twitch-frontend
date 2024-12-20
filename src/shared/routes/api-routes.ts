import { TProvider } from '@/entities/auth';

export const SERVER_URL = `${process.env.SERVER_URL}/api`;

export const SERVER_ROUTES = {
  root: (url = '') => `${SERVER_URL}${url}`,

  auth: (url = '') => SERVER_ROUTES.root(`/auth/${url}`),
  checkStatus: () => SERVER_ROUTES.auth('is-in-account'),
  register: () => SERVER_ROUTES.auth('register'),
  login: () => SERVER_ROUTES.auth('login'),
  provider: (provider: TProvider) =>
    SERVER_ROUTES.auth(`oauth/connect/${provider}`),

  emailChangeRoot: (url = '') => SERVER_ROUTES.root(`/email-change/${url}`),
  sendEmailChange: () => SERVER_ROUTES.emailChangeRoot('send-change-email'),
  emailChange: () => SERVER_ROUTES.emailChangeRoot('email-change'),

  emailConfirmationRoot: (url = '') =>
    SERVER_ROUTES.root(`/email-confirmation/${url}`),
  emailConfirmation: () => SERVER_ROUTES.emailConfirmationRoot('confirmation'),
  emailConfirmationSend: () =>
    SERVER_ROUTES.emailConfirmationRoot('send-confirmation-email'),

  passwordRecoveryRoot: (url = '') =>
    SERVER_ROUTES.root(`/password-recovery/${url}`),
  passwordRecovery: () => SERVER_ROUTES.passwordRecoveryRoot('recovery'),
  sendPasswordRecovery: () =>
    SERVER_ROUTES.passwordRecoveryRoot('send-password-recovery'),

  twoFactorRoot: (url = '') => SERVER_ROUTES.root(`/two-factor/${url}`),
  twoFactorEmailReset: () => SERVER_ROUTES.twoFactorRoot('send-reset-email'),
  twoFactorEmailSend: () =>
    SERVER_ROUTES.twoFactorRoot('send-two-factor-email'),

  sessionsRoot: (url = '') => SERVER_ROUTES.root(`/sessions/${url}`),
  sessionsAll: () => SERVER_ROUTES.sessionsRoot('all-sessions'),
  sessionsCurrent: () => SERVER_ROUTES.sessionsRoot('current-session'),
  sessionsRemove: (id: string) => SERVER_ROUTES.sessionsRoot(`remove/${id}`),
  logout: () => SERVER_ROUTES.sessionsRoot('logout'),

  channelRoot: (url = '') => SERVER_ROUTES.root(`/channels/${url}`),
  channelFollow: () => SERVER_ROUTES.channelRoot('follow'),
  channelUnfollow: () => SERVER_ROUTES.channelRoot('unfollow'),
  channelCreateDescriptionPart: () =>
    SERVER_ROUTES.channelRoot('create-description-part'),
  channelDeleteDescriptionPart: () =>
    SERVER_ROUTES.channelRoot('delete-description-part'),
  createEmote: () => SERVER_ROUTES.channelRoot('create-emote'),
  deleteEmote: () => SERVER_ROUTES.channelRoot('delete-emote'),

  subscriptionsRoot: (url = '') => SERVER_ROUTES.root(`/subscriptions/${url}`),
  subscriptionCreate: () => SERVER_ROUTES.subscriptionsRoot('create'),
  subscriptionChange: () => SERVER_ROUTES.subscriptionsRoot('change'),
  subscriptionChangeIcon: () => SERVER_ROUTES.subscriptionsRoot('change-icon'),
  subscriptionBuySubscription: () =>
    SERVER_ROUTES.subscriptionsRoot('buy-subscription'),
  subscriptionBuySubscriptionStatus: () =>
    SERVER_ROUTES.subscriptionsRoot('buy-subscription-status'),

  rewardsRoot: (url = '') => SERVER_ROUTES.root(`/rewards/${url}`),
  rewardsCreate: () => SERVER_ROUTES.rewardsRoot('create'),
  rewardsDelete: () => SERVER_ROUTES.rewardsRoot('delete'),
  rewardsBuyReward: () => SERVER_ROUTES.rewardsRoot('buy-reward'),

  moderatorsRoot: (url = '') => SERVER_ROUTES.root(`/moderators/${url}`),
  moderatorsAssign: () => SERVER_ROUTES.moderatorsRoot('assign'),
  moderatorsRemove: () => SERVER_ROUTES.moderatorsRoot('remove'),
  moderatorCheckUserStatus: () =>
    SERVER_ROUTES.moderatorsRoot('check-user-status'),
  moderatorBan: () => SERVER_ROUTES.moderatorsRoot('ban'),
  moderatorUnban: () => SERVER_ROUTES.moderatorsRoot('unban'),

  currenciesRoot: (url = '') => SERVER_ROUTES.root(`/currencies/${url}`),
  currenciesCreate: () => SERVER_ROUTES.currenciesRoot('create-currency'),
  currenciesDelete: () => SERVER_ROUTES.currenciesRoot('delete-currency'),
  currenciesEdit: () => SERVER_ROUTES.currenciesRoot('edit-currency'),
  currenciesEditImage: () =>
    SERVER_ROUTES.currenciesRoot('edit-currency-image'),
  currenciesCreateBalance: () =>
    SERVER_ROUTES.currenciesRoot('create-currency-balance'),

  chatsRoot: (url = '') => SERVER_ROUTES.root(`/chats/${url}`),
  chatsCreateMessage: () => SERVER_ROUTES.chatsRoot('create-message'),
  chatsDeleteMessage: () => SERVER_ROUTES.chatsRoot('delete-message'),
  chatsPinnedMessage: () => SERVER_ROUTES.chatsRoot('pinned-message'),
  chatsUnpinnedMessage: () => SERVER_ROUTES.chatsRoot('unpinned-message'),

  usersRoot: (url = '') => SERVER_ROUTES.root(`/users/${url}`),
  usersProfile: () => SERVER_ROUTES.usersRoot('profile'),
  usersFind: (searchTerm: string) =>
    SERVER_ROUTES.usersRoot(`find/${searchTerm}`),
  usersFindByName: (name: string) =>
    SERVER_ROUTES.usersRoot(`find-by-name/${name}`),
  usersUpdate: () => SERVER_ROUTES.usersRoot('update'),
  usersUpdateAvatar: () => SERVER_ROUTES.usersRoot('update-avatar'),
  usersUpdateBanner: () => SERVER_ROUTES.usersRoot('update-banner')
};
