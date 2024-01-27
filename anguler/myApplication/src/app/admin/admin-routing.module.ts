import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { Sub1Component } from '../sub1/sub1.component';

const routes: Routes = [
  { path : "adminlanding", component : AdminlandingComponent},
  { path : "sub1", component : Sub1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
