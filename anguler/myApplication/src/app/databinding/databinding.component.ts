import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  title = 'myApplication';
  a = 20;
  city: string = "pune";
  myName = "Yogesh";
  isDisable = true;
  name! : string;

  subject = "Math";

  constructor(){}

  submit(){
    this.name = "Yogesh";
  }

  showdata(data:any){
    console.log(data.target.value);
    this.myName = data.target.value
  }
}
