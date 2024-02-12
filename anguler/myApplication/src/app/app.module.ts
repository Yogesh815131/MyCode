import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { DirectiveComponent } from './directive/directive.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserSuccessComponent } from './user/user-success/user-success.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PipeComponent } from './pipe/pipe.component';
import { SearchPipe } from './search.pipe';
import { ShareModule } from './share/share.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DatabindingComponent,
    TestComponent,
    DirectiveComponent,
    UserSuccessComponent,
    ParentComponent,
    ChildComponent,
    PipeComponent,
    SearchPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ShareModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
