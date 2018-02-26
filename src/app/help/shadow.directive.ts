import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective implements OnInit {

  @Input() appShadow: string;
  @Input() appShadowX: string;
  @Input() appShadowY: string;
  @Input() appShadowBlur: string;
  constructor(private ele: ElementRef, private renderer: Renderer2) {
    // renderer.setStyle(ele.nativeElement, 'box-shadow', '2px 2px 12px #58A362')
  }
  ngOnInit() {
    let shadowStr = `${this.appShadowX} ${this.appShadowY} ${this.appShadowBlur} ${this.appShadow}`;
    this.renderer.setStyle(this.ele.nativeElement, 'box-shadow', shadowStr);
  }

}