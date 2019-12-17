import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hockey';

  n="";
  m="";
  messages = [];

  constructor(private http:HttpClient){}

  async ngOnInit(){
    this.messages = (await this.http.get("http://localhost:3000/send").toPromise()) as any[];
  }

  post(){
    console.log(this.n, this.m);
    this.http.post("http://localhost:3000/send", {msg:this.m, name:this.n,}).toPromise();
    location.reload();
  }

  delete(){
    console.log(this.messages, this.m.toString());
    
    this.http.delete("http://localhost:3000/delete").toPromise();
  }


}