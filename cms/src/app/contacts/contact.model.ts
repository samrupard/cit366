import { Injectable } from '@angular/core';

@Injectable()
export class Contact {
    public id: string;
    public name: string;
    public phone: string;
    public email: string;
    public imageUrl: string;
    public group: Contact[];

    constructor(id: string, name: string, phone: string, email: string, imageUrl: string, group: Contact[]) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.imageUrl = imageUrl;
        this.group = group;
    }

}