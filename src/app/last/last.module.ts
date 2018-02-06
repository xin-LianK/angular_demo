import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastComponent } from './last.component';
import { IndexComponent } from './index/index.component';
import { LastRoutingModule } from './last.routing';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    LastRoutingModule,
    MaterialModule
  ],
  declarations: [LastComponent,
    IndexComponent
]
})
export class LastModule { }
