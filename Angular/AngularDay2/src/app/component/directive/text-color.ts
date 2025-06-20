import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextColor {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.color = 'blue';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.color = '';
  }
}
