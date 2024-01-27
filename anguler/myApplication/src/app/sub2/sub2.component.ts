import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sub2',
  templateUrl: './sub2.component.html',
  styleUrls: ['./sub2.component.css']
})
export class Sub2Component {
  stddata2:any;
  constructor(private dataservice:DataService){}
  
  ngOnInit(){
    this.dataservice.studentData.subscribe(data =>{
      this.stddata2 = data
    })
  }
}
