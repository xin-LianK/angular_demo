import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contant',
  templateUrl: './contant.component.html',
  styleUrls: ['./contant.component.css']
})
export class ContantComponent implements OnInit {

  @Input() story: string;
  @Input('character') mainCharacter: string;//针对不同的参数 需要在括号里声明原来的参数

  constructor() { }

  ngOnInit() {
  }

}
