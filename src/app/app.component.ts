import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { FormControl } from '@angular/forms';
import { CapitalizePipe } from './capitalize.pipe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    CapitalizePipe,
    Location,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  panelColor = new FormControl('Router');
  data: string;
  isRoot: boolean;
  constructor(
    private capitalize: CapitalizePipe,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private title: Title
  ) {
    route.data.subscribe(d => {
      this.title.setTitle(d['title']);
    })
  }

  // 监听url中的更改，并且如果用户位于根路径中
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (this.location.path() !== '') {
        this.isRoot = false;
      } else {
        this.isRoot = true;
      }
    })
  }
  onsubmit(value) {
    this.data = this.capitalize.transform(value);
  }
  // 在导航中前进或后退：
  goBack() {
    this.location.back();
  }
  goForward() {
    this.location.forward();
  }
  // 获取当前路径
  getPath() {
    alert(this.location.path());
  }
  // normalize 获取路径并返回标准化路径
  getAllPath() {
    alert(this.location.normalize(''))
  }
  // 更改给定的URL并将其添加到浏览器的历史记录
  goPath() {
    this.location.go('https://www.baidu.com')
  }
  // 更改为给定的URL，并替换历史记录中最顶端的URL。这使得如果用户返回，它将不会回到用户所在的URL，而是之前的那个
  rePath() {
    this.location.replaceState('https://www.google.com')
  }
  // isCurrentPathEqualTo 比较两个给定的路径值，看它们是否相等
}
