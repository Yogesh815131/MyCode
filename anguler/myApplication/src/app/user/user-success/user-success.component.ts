import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-success',
  templateUrl: './user-success.component.html',
  styleUrls: ['./user-success.component.css']
})
export class UserSuccessComponent {

  name:any;

  constructor(private dataService:DataService, private router:Router){}

  ngOnInit(){
    this.name = this.dataService.userName;
  }
 
}
