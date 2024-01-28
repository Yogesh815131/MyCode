import { Component, ElementRef, ViewChild } from '@angular/core';
import { Viewchild2Component } from '../viewchild2/viewchild2.component';

@Component({
  selector: 'app-viewchild1',
  templateUrl: './viewchild1.component.html',
  styleUrls: ['./viewchild1.component.css']
})
export class Viewchild1Component {

  name:any;
  @ViewChild(Viewchild2Component) viewChild2copm!: Viewchild2Component;
  @ViewChild('div_container') eleref! : ElementRef;

  ngAfterViewInit(){
    this.eleref.nativeElement.innerHTML = 'yogesh live in jalgoan'
  }

  getData(){
    this.name = this.viewChild2copm.cityname;
  }
}
