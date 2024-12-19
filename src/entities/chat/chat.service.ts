import { axiosAPI } from '@/shared/config';
import { SERVER_ROUTES } from '@/shared/routes';
import { IResponse } from '@/shared/types';

import {
  IChat,
  ICreateMessage,
  IDeleteMessage,
  IMessage,
  IPinnedMessage,
  IUnpinnedMessage
} from './chat.types';

class ChatService {
  public async createMessage(data: ICreateMessage) {
    return axiosAPI.post<IMessage>(SERVER_ROUTES.chatsCreateMessage(), data);
  }

  public async deleteMessage(data: IDeleteMessage) {
    return axiosAPI.delete<IResponse>(SERVER_ROUTES.chatsDeleteMessage(), {
      data
    });
  }

  public async pinnedMessage(data: IPinnedMessage) {
    return axiosAPI.patch<IChat>(SERVER_ROUTES.chatsPinnedMessage(), data);
  }

  public async unpinnedMessage(data: IUnpinnedMessage) {
    return axiosAPI.patch<IResponse>(
      SERVER_ROUTES.chatsUnpinnedMessage(),
      data
    );
  }
}

export const chatService = new ChatService();
