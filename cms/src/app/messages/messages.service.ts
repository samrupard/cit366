import { Injectable } from '@angular/core';
import { MOCKMESSAGES } from './MOCKMESSAGES';
import { Message } from './message.model';
import { Contact } from '../contacts/contact.model';

@Injectable()
export class MessageService {
    messages: Message[];

    constructor() {
        this.messages = MOCKMESSAGES;
        this.getMessages();
    }

    getMessages(): Message[] {
        return this.messages.slice();
    }

    getMessage(id: string): Message {
        for (const message of this.messages) {
            if (message.id === id) {
                return message;
            }
        }
        return null;
    }
}