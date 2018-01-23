import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastComponent } from './last.component';
import { IndexComponent } from './index/index.component';
import { LastRoutingModule } from './last.routing';

@NgModule({
  imports: [
    CommonModule,
    LastRoutingModule
  ],
  declarations: [LastComponent,
    IndexComponent
]
})
export class LastModule { }
