import { IUser } from "../user";

export interface IFollow {
  streamerId: string;
}

export interface IUnfollow {
  streamerId: string;
}

export interface ICreateDescriptionPart {
  description: string;
  url: string;
}

export interface IDeleteDescriptionPart {
  descriptionPartId: string;
}

export interface CreateEmote {
  name: string;
}

export interface DeleteEmote {
  id: string;
}

export interface IEmote {
  id: string;
  createdAt: string;
  updatedAt: string;
  image: string;
  tag: string;
  name: string;
  userId: string;
}

export interface IFollower {
  id: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  streamerId: string;
  user?:IUser
}

export interface IDescriptionPart {
  id: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  image: string;
  description: string;
  url: string;
}
