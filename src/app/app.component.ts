import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { BaconDirective } from './bacon.directive';
import { LoginComponent } from './account/login/login.component';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { FormControl } from '@angular/forms';
import { CapitalizePipe } from './capitalize.pipe';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';

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
export class AppComponent implements AfterViewInit {
  panelColor = new FormControl('Router');
  data: string;
  isRoot: boolean;

  extraIngredient: string;
  @ViewChild(BaconDirective)
  @ViewChild('someInput') someInput: ElementRef;
  @ViewChild(LoginComponent) loginChild: LoginComponent;

  set appBacon(directives: BaconDirective) {
    this.extraIngredient = directives.ingredient;
  }
  ngAfterViewInit() {
    this.someInput.nativeElement.value = "Anchvies! 🍕🍕"
    // console.log(this.loginChild.whoIm());
  }

  time$ = Observable.interval(1000).map(val => new Date());
  
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
  linkPath() {
    // 两者相同
    this.router.navigate(['/', 'red-pill']).then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });
    // this.router.navigateByUrl('/red-pill;x=white-rabbit/neo');
  }
  // 更改为给定的URL，并替换历史记录中最顶端的URL。这使得如果用户返回，它将不会回到用户所在的URL，而是之前的那个
  rePath() {
    this.location.replaceState('https://www.google.com')
  }
  // isCurrentPathEqualTo 比较两个给定的路径值，看它们是否相等
}
