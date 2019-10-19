export class Contact {
    id: string;
    name: string;
    phone: string;
    email: string;
    imageUrl: string;
    group: Contact[];

    constructor(id: string, name: string, phone: string, email: string, imageUrl: string, group: Contact[]) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.imageUrl = imageUrl;
        this.group = group;
    }

}