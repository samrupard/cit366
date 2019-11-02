import { Component, OnInit, OnDestroy } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {
  contact: Contact[] = [];
  subscription: Subscription;

  constructor(private contactService: ContactService) {
    this.contact = this.contactService.getContacts();
  }

  ngOnInit() {
    this.subscription = this.contactService.contactChangedEvent
      .subscribe(
        (contactsList: Contact[]) => {
          this.contact = contactsList;
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}