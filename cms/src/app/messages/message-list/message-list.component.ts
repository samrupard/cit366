import { Component, OnInit, OnDestroy } from '@angular/core';
import { Message } from '../message.model';
import { MessageService } from '../messages.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit, OnDestroy {
  messages: Message[] = [];
  subscription: Subscription;

  constructor(private messageService: MessageService) {
    this.messageService.getMessages();
  }

  ngOnInit() {
    this.subscription = this.messageService.messageChangeEvent
    .subscribe(
      (messages: Message[]) => {
        this.messages = messages;
      });
  }

  onAddMessage(message: Message) {
    this.messages.push(message);
  }

  onSelectedMessage(message: Message[]) {
    this.messageService.messageChangeEvent.next(message);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}