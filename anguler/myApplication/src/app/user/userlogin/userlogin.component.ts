import { Component } from '@angular/core';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {

  isShowPass = false;
  constructor(){}

  login(data:any){
    let UserName = data.uName.replace(/\s+/, ' ');
    console.log(data);
    
  }

  toShowPassWord(){
    this.isShowPass = !this.isShowPass;
  }
}
