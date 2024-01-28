import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-sub1',
  templateUrl: './sub1.component.html',
  styleUrls: ['./sub1.component.css']
})
export class Sub1Component {

  student = "Yogesh Jadhav";
  constructor(private dataService : DataService){}

  sub1(){
    this.dataService.studentData.next(this.student)
  }

}
