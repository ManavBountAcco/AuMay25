import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEnlargeText]'
})
export class EnlargeText {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.transform = 'scale(1.2)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.transform = 'scale(1)';
  }
}
