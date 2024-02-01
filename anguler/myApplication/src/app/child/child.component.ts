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


  // Hookes
  ngOnInit(){
    //once
    //oninit trigger first if compo dont have inputbound property
    //it will trigger only once at the time of compo initialization.
    console.log('onInit calling...');
    
  }

  ngOnChanges(){
    //onChanges lf hook called first if compo having input bound property. 
    //also it wil repeatadly trigger omn every change of input bund property.
    console.log('onChanges calling...');

  }

  ngDoCheck(){
    //it will trigger very first time after intialisation of ngOnChjanges lfh 
    //repeatatly trigger on every change of onChanges lfh
    console.log('do check calling');
    
  }

  ngAfterContentInit(){
     //once
console.log('ngAfterContentInit calling');

  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked calling');
  }
   
  ngAfterViewInit(){
     //once
    console.log('ngAfterViewInit calling');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked calling');
  }

  ngOnDestroy(){
     //once
     console.log('ngOnDestroy');
     
  }
}
