export interface IModeratorAssign {
  userId: string;
}

export interface IModeratorRemove {
  userId: string;
}

export interface ICheckUserStatus {
  userId: string;
  streamerId: string;
}

export interface ICreateBan {
  streamerId: string;
  userId: string;
  reason: string;
  expiresAt?: Date;
  action: banAction;
}
export interface IUnbun {
  userId: string;
  streamerId: string;
}
export interface IModerator {
  id: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  streamerId: string;
}

export interface IBan {
  id: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  moderatorId: string;
  streamerId: string;
  reason: string;
  action: banAction;
  expiresAt: null | string;
}

enum banAction {
  MUTE = 'MUTE',
  BAN = 'BAN'
}
