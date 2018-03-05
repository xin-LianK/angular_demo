import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appGoWild]'
})
export class GoWildDirective implements OnInit {

  constructor(private renderer: Renderer2, private elm: ElementRef) { }
  ngOnInit() {
    this.renderer.addClass(this.elm.nativeElement, 'wild');
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('Hello word');

    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.elm.nativeElement, div);

    this.renderer.setAttribute(this.elm.nativeElement, 'data', '1920-12-20');
    this.renderer.removeClass(this.elm.nativeElement, 'wild');
    
    this.renderer.setStyle(
      this.elm.nativeElement,
      'border-left',
      '3px dashed olive'
    )
    this.renderer.removeStyle(this.elm.nativeElement,'border-left');

    this.renderer.setProperty(this.elm.nativeElement, 'alt', 'Cute alligator');

    this.renderer.setProperty(this.elm.nativeElement, 'value', 'Cute alligator');
  }
}