import { Directive,HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[appNavbar]',
  exportAs:'appNavbar'
})
export class NavbarDirective {

@HostBinding('class.is-open') click=false;
  constructor() { }


@HostListener('click') onClic(){
this.click=!this.click;
}
}