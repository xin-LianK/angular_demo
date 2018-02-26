import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  htmlStr: string = 'This is a &amp; <strong>HtmlString</strong>'
  constructor() { }

  ngOnInit() {
  }

}
