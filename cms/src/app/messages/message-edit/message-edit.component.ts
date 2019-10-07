import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  public currentSender = 'Sam';
  @ViewChild('subjectInput', {static: false}) subjectInputRef: ElementRef;
  @ViewChild('msgTextInput', {static: false}) msgInputRef: ElementRef;
  @Output() addMessageEvent = new EventEmitter<Message>();

  constructor() { }

  ngOnInit() {
  }
  onSendMessage() {
    const msgSubject = this.subjectInputRef.nativeElement.value;
    const msg = this.msgInputRef.nativeElement.value;
    const newMessage = new Message( '1', msgSubject, msg, this.currentSender);
    this.addMessageEvent.emit(newMessage);
  }

  onClear() {
    this.subjectInputRef.nativeElement.value = '';
    this.msgInputRef.nativeElement.value = '';
  }}