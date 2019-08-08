import { Injectable } from '@angular/core';
import { message } from './message';
import { conversation } from './conversation';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  messages: message[];
  conversations: conversation[];

  startConversation(initiatorID: string, recipientsID: string[]) {
    let conversation: conversation = {
      messagesID: [],
      initiatorID: initiatorID,
      recipientsID: recipientsID,
    }

  }
  
  fetchMessages(conversationID: number) {
    return this.conversations[conversationID].messagesID;
  }

}
