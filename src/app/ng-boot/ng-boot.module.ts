import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgBootComponent } from './ng-boot.component';
import { IndexComponent } from './index/index.component';
import { NgBootRoutingModule } from './ng-boot.routing';

@NgModule({
  imports: [
    CommonModule,
    NgBootRoutingModule
  ],
  declarations: [NgBootComponent,
    IndexComponent
  ]
})
export class NgBootModule { }
