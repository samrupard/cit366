import { Injectable, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';

@Injectable()
export class ContactService {
  contactSelectedEvent = new EventEmitter<Contact>(); 
  contacts: Contact[] = [];

  constructor() {
    this.contacts = MOCKCONTACTS;
  }

  getContacts(): Contact[] {
    return this.contacts.slice();
  }

  getContact(contactId: string): Contact {
    for (let contact of this.contacts) {
      if (contact.contactId === contactId) {
        return contact;
      }
    }
    return null;
  }
}