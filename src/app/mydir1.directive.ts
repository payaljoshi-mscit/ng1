import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMydir1]'
})
export class Mydir1Directive {

  constructor(Element: ElementRef) { 
    console.log(Element);
      Element.nativeElement.innerText = "Text is changed by changeText Directive.";
  }

}
