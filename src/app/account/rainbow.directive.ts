import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
  possibleColors = [
    'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
    'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
  ];

  //允许您在承载指令的元素或组件上设置属性，
  @HostBinding('style.color') color: string;
  @HostBinding('style.border-color') borderColor: string;


  // 还可以绑定到主机的任何类，属性或属性
  // @HostBinding(‘class.active’)
  // @HostBinding(‘disabled’)
  // @HostBinding(‘attr.role’)


  //允许您监听主机元素或组件上的事件。
  @HostListener('keydown') newColor() {
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);
    this.color = this.borderColor = this.possibleColors[colorPick];
  }
  constructor() { }

}