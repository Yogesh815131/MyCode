import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-sub3',
  templateUrl: './sub3.component.html',
  styleUrls: ['./sub3.component.css']
})
export class Sub3Component {
  stsddata3:any
  constructor(private dataSevice : DataService){}

  ngOnInit(){
    this.dataSevice.studentData.subscribe(data=>{
      this.stsddata3 = data
    })
  }
}
