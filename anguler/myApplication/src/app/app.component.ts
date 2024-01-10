import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApplication';
  a = 20;
  city: string = "pune";
  myName = "Yogesh";
  isDisable = true;
  name! : string;

  constructor(){}

  submit(){
    this.name = "Yogesh";
  }

}
