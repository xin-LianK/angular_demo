import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 使用[(NgModel)]时必须在其模块内引入
import { FormsModule } from '@angular/forms'; // <--- JavaScript import from Angular

import { HomeComponent } from './home.component';
import { IndexComponent } from './index/index.component';
import { HomeRoutingModule } from './home-routing.module';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule // <--- JavaScript import from Angular
  ],
  declarations: [
    HomeComponent,
    IndexComponent,
    ListComponent
  ]
})
export class HomeModule { }
