import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';


import { ContactComponent } from './contacts/contacts.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactDetailComponent } from './contacts/contacts-detail/contacts-detail.component';
import { ContactItemComponent } from './contacts/contact-item/contact-item.component';


import { DocumentsComponent } from './documents/documents.component';
import { DocumentListComponent } from './documents/document-list/document-list.component';
import { DocumentItemComponent } from './documents/document-item/document-item.component';
import { DocumentDetailComponent } from './documents/document-detail/document-detail.component';
import { MessageEditComponent } from './messages/message-edit/message-edit.component';
import { MessageItemComponent } from './messages/message-item/message-item.component';
import { MessageListComponent } from './messages/message-list/message-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ContactService } from './contacts/contact.service';
import { DocumentService } from './documents/documents.service';
import { MessageService } from './messages/messages.service';
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';
import { DocumentViewComponent } from './documents/document-view/document-view.component';
import { DocumentEditComponent } from './documents/document-edit/document-edit.component';
import { WindRefService } from './wind-ref.service';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { DndModule } from 'ng2-dnd';
import { ContactsFilterPipe } from './contacts/contacts-filter.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    ContactListComponent,
    ContactDetailComponent,
    ContactItemComponent,
    DocumentsComponent,
    DocumentListComponent,
    DocumentItemComponent,
    DocumentDetailComponent,
    MessageEditComponent,
    MessageItemComponent,
    MessageListComponent,
    MessagesComponent,
    ContactEditComponent,
    DocumentViewComponent,
    DocumentEditComponent,
    ContactsFilterPipe
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, DndModule.forRoot(), HttpClientModule
  ],
  providers: [ContactService, DocumentService, MessageService, WindRefService],
  bootstrap: [AppComponent]
})
export class AppModule { }
