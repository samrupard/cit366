import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { MOCKMESSAGES } from './MOCKMESSAGES';
import { Message } from './message.model';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MessageService {
    messageChangeEvent = new Subject<Message[]>();
    messages: Message[] = [];
    maxMessageId: number;

    constructor(private http: HttpClient) {
        
         this.maxMessageId = this.getMaxId();
    }

    storeMessages() {
        this.messages = JSON.parse(JSON.stringify(this.messages));
        const header = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.put('https://samrupard-cms.firebaseio.com/messages.json', this.messages, { headers: header})
          .subscribe(
            (messages: Message[]) => {
              this.messageChangeEvent.next(this.messages.slice());
            }
          );
      }

      getMessages() {
        this.http.get('https://samrupard-cms.firebaseio.com/messages.json')
          .subscribe(
            (messages: Message[]) => {
              this.messages = messages;
              this.messages.sort((a, b) => (a['name'] < b['name']) ? 1 : (a['name'] > b['name']) ? -1 : 0);
              this.messageChangeEvent.next(this.messages.slice());
            }, (error: any) => {
              console.log('something bad happened...');
            }
          );
      }

      getMessage(id: string) {
        for (const message of this.messages) {
          if (message.id === id) {
            return message;
          }
        }
        return null;
      }

      addMessage(newMessage: Message) {
        if (newMessage === null) {
          return;
        }

        this.maxMessageId++;
           newMessage.id = String(this.maxMessageId);
          this.messages.push(newMessage);
        
        this.storeMessages();
      }

      getMaxId(): number {
        let maxId = 0;
        for (const message of this.messages) {
          const currentId = +message.id;
          if (currentId > maxId) {
            maxId = currentId;
          }
        }
        return maxId;
      }
}