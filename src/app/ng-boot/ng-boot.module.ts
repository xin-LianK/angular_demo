import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgBootComponent } from './ng-boot.component';
import { IndexComponent } from './index/index.component';
import { NgBootRoutingModule } from './ng-boot.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgBootRoutingModule,
    NgbModule
  ],
  declarations: [NgBootComponent,
    IndexComponent
  ]
})
export class NgBootModule { }
