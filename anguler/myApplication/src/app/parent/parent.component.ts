import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  name = "yogesh";
  stateFromChild:any;
  dataComingFromchild(data:any){
    this.stateFromChild = data
  }
}
