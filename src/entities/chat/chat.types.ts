export interface ICreateMessage {
  chatId: string;
  content: string;
  replyMessageId?: string;
}

export interface IDeleteMessage {
  messageId:string;
}

export interface IPinnedMessage {
  messageId:string;
}

export interface IUnpinnedMessage {
  messageId:string;
}

export interface IMessage {
  id: string;
  createdAt: string;
  updatedAt: string;
  chatId:string;
  senderId:string;
  replyMessageId?:string;
  content:string
}

export interface IChat{
  id: string;
  createdAt: string;
  updatedAt: string;
  pinnedMessageId?:string;
  userId:string
}
