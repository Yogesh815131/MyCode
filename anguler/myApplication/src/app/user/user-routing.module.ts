import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserloginComponent } from './userlogin/userlogin.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserSuccessComponent } from './user-success/user-success.component';

const routes: Routes = [
  {path : "userlogin", component : UserloginComponent},
  {path : "usersignup", component : SignUpComponent},
  {path : "usersuccess", component : UserSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
