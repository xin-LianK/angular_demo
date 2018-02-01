import { Component, OnInit } from '@angular/core';

class Hero {
  constructor(public name: string) { }
}
@Component({
  selector: 'app-on-change',
  templateUrl: './on-change.component.html',
  styleUrls: ['./on-change.component.css'],
})
export class OnChangeComponent implements OnInit {
  ngOnInit() { }
}
