import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core'; //++ 组件与angular输出的交互
import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-contant',
  templateUrl: './contant.component.html',
  styleUrls: ['./contant.component.css']
})

export class ContantComponent implements OnInit {
  OutputStr: string;
  @Input() story: string;
  @Input('character') mainCharacter: string;//针对不同的参数 需要在括号里声明原来的参数
  @Output() selectStory = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelectStory(OutputStr: string) {
    this.selectStory.emit(OutputStr);//将事件推送到父组件
  }
}
