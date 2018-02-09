import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponent } from './material.component';
import { IndexComponent } from './index/index.component';
import { MaterialRoutingModule } from './material.routing';
import { MainMaterialModule } from '../main-material.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DialogComponent } from './dialog/dialog.component';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialRoutingModule,
    MainMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [MaterialComponent,
    IndexComponent,
    DialogComponent,
    TableComponent
],
  entryComponents: [
    DialogComponent
  ]
})
export class MaterialModule { }
