import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contant',
  templateUrl: './contant.component.html',
  styleUrls: ['./contant.component.css']
})
export class ContantComponent implements OnInit {

  @Input() story: string;
  @Input('character') mainCharacter: string;
  
  constructor() { }

  ngOnInit() {
  }

}
