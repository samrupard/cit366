import { Component, OnInit, ContentChildDecorator } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Contact } from '../contact.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cms-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
  contact: Contact = null;
  groupContacts: Contact[];
  editMode = false;
  hasGroup = false;
  originalContact: Contact;
  id: string;

  constructor(private contactService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          const id = params['id'];
          if ( id === null || id === undefined) {
            this.editMode = false;
            return;
          }

          this.originalContact = this.contactService.getContact(this.id);
          if (this.originalContact === null || this.originalContact === undefined) {
            this.editMode = false;
            return;
          }

          this.editMode = false;
          this.contact = JSON.parse(JSON.stringify(this.originalContact));

          if (this.contact.group != null) {
            this.groupContacts = JSON.parse(JSON.stringify(this.originalContact.group));
            this.groupContacts = this.contact.group.slice();
          }
        }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newContact = new Contact('', value.name, value.email, value.phone, value.imageUrl, value.group);
    if (this.editMode === true) {
      this.contactService.updateContact(this.originalContact, newContact);
    } else {
      this.contactService.addContact(newContact);
    }
    this.router.navigate(['/contacts']);
  }

  onCancel() {
    this.router.navigate(['/contacts']);
  }
}