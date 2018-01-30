import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // size: number | string;
  @Input() size: number | string = 12;
  @Output() sizeChange = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  dec() {
    this.resize(-1);
  }
  inc() {
    this.resize(+1);
  }
  resize(i: number) {
    this.size = Math.min(40, Math.max(8, + this.size + i));
    this.sizeChange.emit(this.size);
  }
}
