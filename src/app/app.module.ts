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


@NgModule({
  declarations: [
    AppComponent,
    ReverseStrPipe
  ],
  imports: [
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
  exports: [NgbModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [],
})
export class AppModule { }
