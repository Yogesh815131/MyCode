import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() parentName:any;
  @Output() dataFromChild = new EventEmitter<any>();
  state = "MH-19";

  datafromchildparent(){
    this.dataFromChild.emit(this.state);
  }
}
