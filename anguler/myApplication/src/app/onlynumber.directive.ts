import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlynumber]'
})
export class OnlynumberDirective {

  constructor() { }

  @HostListener('input', ['$event']) acceptinput(event:Event){    
    const input = event.target as HTMLInputElement;
    const initialValue = input.value;
    input.value = initialValue.replace(/[^0-9]/g, '');
    if(input.value !== initialValue){
      event.stopPropagation;
    }
  }

}
