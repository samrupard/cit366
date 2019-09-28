import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact-list/contact.model';

@Component({
  selector: 'cms-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {
  contact: Contact[] = [
    new Contact( '1', 'R. Kent Jackson', 'jacksonk@byui.edu', '208-496-3771', 'photo', null)

  ];

  constructor() { }

  ngOnInit() {
  }

}
