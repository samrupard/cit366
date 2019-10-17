export class Contact {
    contactId: string;
    name: string;
    phone: string;
    email: string;
    imageUrl: string;
    group: Contact[];

    constructor (contactId: string, name: string, phone: string, email: string, imageUrl: string, group: Contact[]) {
        this.contactId = contactId;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.imageUrl = imageUrl;
        this.group = group;
    }

}