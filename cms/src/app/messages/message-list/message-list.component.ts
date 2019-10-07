import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';



@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [
    new Message('1', 'Grades', 'The grades for this asignment have been posted', 'Bro. Jackson'),
    new Message('1', 'Essay', 'The grades for the essay have been posted', 'Bro. Jackson'),
    new Message('1', 'Test', 'The grades for this test have been posted', 'Bro. Jackson'),
  ];

  constructor() { }

  ngOnInit() {
  }

  onAddMessage(message: Message) {
    this.messages.push(message);
  }
}