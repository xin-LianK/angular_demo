import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBacon]'
})
export class BaconDirective {
  ingredient = 'mayo';
  constructor(elem: ElementRef, renderer: Renderer2) {
    let bacon = renderer.createText('🥓🥓🥓');
    renderer.appendChild(elem.nativeElement, bacon);
  }

}