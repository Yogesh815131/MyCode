import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/api-call.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {
  userData:any;
  isShowPass = false;
  isValid = false;
  constructor(private dateService:DataService, private router:Router, private apiCallService:ApiCallService){}

  ngOnInit(){
    this.getUserData();
  }

  getUserData(){
    this.apiCallService.getUserData().subscribe(response =>{
      this.userData = response
      console.log(this.userData);
      
    })
  }

  login(data:any){

    // let UserName = data.uName.replace(/\s+/, ' ');
    // console.log(data);

    if(this.userData){
      var validUser = this.userData.find((item:any)=>{
        return item.fullName == data.uName && data.password == item.password;
      })
    }
    if(validUser){
      this.dateService.userName = data.uName
      this.router.navigateByUrl("/user/usersuccess")
    }else{
      this.isValid = true
    }

    // this.dateService.userName = data.uName;
    // this.router.navigateByUrl('/user/usersuccess')
  }

  toShowPassWord(){
    this.isShowPass = !this.isShowPass;
  }
}
