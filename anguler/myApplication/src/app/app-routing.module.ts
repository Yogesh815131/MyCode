import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { TestComponent } from './test/test.component';
import { DirectiveComponent } from './directive/directive.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  { path : "", component: HomeComponent},
  { path : "databinding", component : DatabindingComponent},
  { path : "test", component : TestComponent},
  { path : "toggle", component : DirectiveComponent},
  { path : "user", loadChildren:()=>import("./user/user.module").then(m=>m.UserModule)},
  { path : "admin", loadChildren:()=>import("./admin/admin.module").then(mod=>mod.AdminModule)},
  { path : "parent", component : ParentComponent},
  { path : "child", component : ChildComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
