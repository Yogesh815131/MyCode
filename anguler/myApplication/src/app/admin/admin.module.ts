import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { Viewchild1Component } from './viewchild1/viewchild1.component';
import { Viewchild2Component } from './viewchild2/viewchild2.component';
import { Sub1Component } from './sub1/sub1.component';
import { Sub2Component } from './sub2/sub2.component';
import { Sub3Component } from './sub3/sub3.component';


@NgModule({
  declarations: [
    AdminlandingComponent,
    Viewchild1Component,
    Viewchild2Component,
    Sub1Component,
    Sub2Component,
    Sub3Component
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
