import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfTrue]'
})
export class IfTrue {
  constructor(private templateRef: TemplateRef<any>, private vcr: ViewContainerRef) {}

  @Input() set appIfTrue(condition: boolean) {
    this.vcr.clear();
    if (condition) {
      this.vcr.createEmbeddedView(this.templateRef);
    }
  }
}
