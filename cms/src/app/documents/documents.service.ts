import { Injectable, EventEmitter } from '@angular/core';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  documentSelectedEvent = new EventEmitter<Document[]>();
  
   documentListChangedEvent = new Subject<Document[]>();
    documents: Document[] = [];
  maxDocumentId: number;

  constructor(private http: HttpClient) {
   this.maxDocumentId = this.getMaxId();
  }

  sortAndSend() {
    this.documents.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    this.documentListChangedEvent.next(this.documents.slice());
  }

  storeDocments() {
    this.documents = JSON.parse(JSON.stringify(this.documents));
      const header = new HttpHeaders({'Content-Type': 'application/json'});
      return this.http.put('https://samrupard-cms.firebaseio.com/documents.json', this.documents, { headers: header})
      .subscribe(
        (documents: Document[]) => {
          this.documentListChangedEvent.next(this.documents.slice());
        }
      );
  }

  getDocuments() {
    this.http.get<{ message: string, documents: Document[]}>
    ('http://localhost:3000/documents')
      .subscribe(
        (documentData) => {
          this.documents = documentData.documents;
          this.sortAndSend();

        },
         (error: any) => {
          console.log('something bad happened...');
        }
      );
  }

  getDocument(id: string): Document {
    for (const document of this.documents) {
      if (document.id === id) {
        return document;
      }
    }
    return null;
  }
  

  deleteDocument(document: Document) {
    if (document === null || document === undefined) {
      return;
    }
      const pos = this.documents.indexOf(document);
         if (pos < 0) {
      return;
    }

    this.documents.splice(pos, 1);
    
    this.storeDocments();
  }

  getMaxId(): number {
    let maxId = 0;
      for (const document of this.documents) {
      const currentId = parseInt(document.id, 10);
        if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }

  addDocument(newDocument: Document) {
    if (newDocument === null) {
      return;
    }

    newDocument.id = '';

    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    
    //add to db
    this.http.post<{ message: string, document: Document }>
    ('http://localhost:3000/documents',
    document, 
    { headers: headers })
    .subscribe(
      (responseData) => {
        this.documents.push(responseData.document);
        this.sortAndSend();
      },
        (error: any) => {
          console.log(error);
        }
    );
   

           this.maxDocumentId++;
    newDocument.id = String(this.maxDocumentId);
     this.documents.push(newDocument);
    
    this.storeDocments();
  }

  updateDocument (originalDocument: Document,
                  newDocument: Document) {
    if (originalDocument === null || newDocument === null
          || originalDocument === undefined || newDocument === undefined) {
      return;
    }

    newDocument.id = originalDocument.id;
    const pos = this.documents.indexOf(originalDocument);
    if (pos < 0) {
      return;
    }

    this.documents[pos] = newDocument;
   


        this.storeDocments();
  }

}