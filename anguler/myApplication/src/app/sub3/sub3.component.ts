import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sub3',
  templateUrl: './sub3.component.html',
  styleUrls: ['./sub3.component.css']
})
export class Sub3Component {
  stddata3:any
  constructor(private dataService:DataService){}

  ngOnInit(){
    this.dataService.studentData.subscribe(data=>{
      this.stddata3 = data;
    })
  }
}
