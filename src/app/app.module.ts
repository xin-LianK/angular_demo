import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule, NgModel } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MainMaterialModule } from './main-material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReverseStrPipe } from './reverse-str.pipe';

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
    NgbModule.forRoot(),
  ],
  exports: [NgbModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [],
})
export class AppModule { }
