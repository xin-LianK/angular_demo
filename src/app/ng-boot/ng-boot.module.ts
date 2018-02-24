import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgBootComponent } from './ng-boot.component';
import { IndexComponent } from './index/index.component';
import { NgBootRoutingModule } from './ng-boot.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EasyModalComponent } from './easy-modal/easy-modal.component';

@NgModule({
  imports: [
    CommonModule,
    NgBootRoutingModule,
    NgbModule
  ],
  declarations: [NgBootComponent,
    IndexComponent,
    EasyModalComponent
]
})
export class NgBootModule { }
