import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  @Output() documentWasSelected = new EventEmitter<Document>();
  document: Document[] = [
    new Document(1, 'Samuel', 'this is my first name.', 'youtube.com', null),
    new Document(2, 'Edward', 'this is my middle name.', 'twitch.tv', null),
    new Document(3, 'Foster', 'this is my second middle name', 'instagram.com', null),
    new Document(4, 'Rupard', 'this is my 366 alias', 'byui.instructure.com', null),
    new Document(5, 'Jagni', 'this is my osrs username', 'wikipedia.com', null)
  ];

  constructor() { }

  ngOnInit() {
  }

  onDocumentSelected(document: Document) {
    this.documentWasSelected.emit(document);
  }
}