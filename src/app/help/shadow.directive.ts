import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective {

  constructor(private ele: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(ele.nativeElement, 'box-shadow', '2px 2px 12px #58A362')
  }

}