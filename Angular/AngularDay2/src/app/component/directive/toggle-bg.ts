import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggleBg]'
})
export class ToggleBg {
  private isToggled = false;

  constructor(private el: ElementRef) {}

  @HostListener('click') onClick() {
    this.isToggled = !this.isToggled;
    this.el.nativeElement.style.backgroundColor = this.isToggled ? '#d1ffd1' : '';
  }
}
