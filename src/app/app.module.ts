import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

// 动画必要模块
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule, NgModel } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MainMaterialModule } from './main-material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReverseStrPipe } from './reverse-str.pipe';
import { FlexLayoutModule } from "@angular/flex-layout";

import { ReactiveFormsModule } from '@angular/forms';  // <-- 使用FormControl必须 import module
import { CapitalizePipe } from './capitalize.pipe';
import { BaconDirective } from './bacon.directive';
import { GoWildDirective } from './go-wild.directive';


@NgModule({
  declarations: [//这是为了指定应该是模块一部分的组件，管道和指令。
    AppComponent,
    ReverseStrPipe,
    CapitalizePipe,
    BaconDirective,
    GoWildDirective
],
  imports: [//这是为了导入其他导出成员的模块，这些模块是作为NgModule一部分的组件的模板中使用的
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MainMaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
  ],
  exports: [NgbModule],//如果您想导出模块的成员，以便它们可以在其他模块的组件模板中使用，则这些成员将进入exports数组。
  providers: [],//一旦它们提供，它们将在应用中的任何地方都可用。
  bootstrap: [AppComponent],//这是为了定义根组件，通常称为AppComponent。这意味着引导程序应该只包含一个成员，并且它应该仅在主应用程序模块中定义。
  entryComponents: [],
})
export class AppModule { }
