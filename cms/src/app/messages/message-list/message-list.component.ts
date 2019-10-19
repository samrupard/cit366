import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';
import { MessageService } from '../messages.service';

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [];

  constructor(private messageService: MessageService) {
    this.messages = this.messageService.getMessages();
  }

  ngOnInit() {

  }

  onAddMessage(message: Message) {
    this.messages.push(message);
  }
}