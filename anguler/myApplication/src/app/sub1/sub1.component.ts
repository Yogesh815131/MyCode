import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sub1',
  templateUrl: './sub1.component.html',
  styleUrls: ['./sub1.component.css']
})
export class Sub1Component {
  student = "Yogesh Jadhav";
  constructor( private dataservice:DataService){}
  sub1(){
    this.dataservice.studentData.next(this.student);
  }
}
