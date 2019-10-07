  
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Contact } from './contact.model';


@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  @Output() contactWasSelected = new EventEmitter<Contact>();
  contact: Contact[] =[
    new Contact('1', "Bro. Jackson", "jacksonk@byui.edu", "208-496-3771", "https://web.byui.edu/Directory/Employee/jacksonk.jpg", null),
    new Contact('1', "Bro. Barzee", "barzeer@byui.edu", "208-496-3768", "https://web.byui.edu/Directory/Employee/barzeer.jpg", null)
  ]
  constructor() { }
  onContactSelected(contact: Contact){
    this.contactWasSelected.emit(contact);
  }
  ngOnInit() {
  }

}
 