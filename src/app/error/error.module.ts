import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorRoutingModule } from './error-routing.module';

import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    ErrorRoutingModule,
    CoreModule
  ],
  declarations: [ErrorComponent,
    ForbiddenComponent,
    NotFoundComponent
  ]
})
export class ErrorModule { }
