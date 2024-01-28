import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-sub2',
  templateUrl: './sub2.component.html',
  styleUrls: ['./sub2.component.css']
})
export class Sub2Component {
  stddata2:any
  constructor(private dataService : DataService){}
   
  ngOnInit(){
    this.dataService.studentData.subscribe(data=>{
      this.stddata2 = data
    })
  }
}
