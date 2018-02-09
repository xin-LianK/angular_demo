import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastComponent } from './last.component';
import { IndexComponent } from './index/index.component';
import { LastRoutingModule } from './last.routing';
import { MaterialModule } from '../material.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  imports: [
    CommonModule,
    LastRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [LastComponent,
    IndexComponent,
    DialogComponent
  ],
  entryComponents: [
    DialogComponent
  ]
})
export class LastModule { }
