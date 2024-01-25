import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {

  isShowPass = false;
  constructor(private dateService:DataService, private router:Router){}

  login(data:any){

    // let UserName = data.uName.replace(/\s+/, ' ');
    // console.log(data);
    this.dateService.userName = data.uName;
    this.router.navigateByUrl('/user/usersuccess')
  }

  toShowPassWord(){
    this.isShowPass = !this.isShowPass;
  }
}
