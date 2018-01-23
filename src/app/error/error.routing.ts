import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ErrorComponent } from './error.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: ErrorComponent,
    children: [
      {
        path: 'forbidden',
        component: ForbiddenComponent
      },
      {
        path: '',
        component: NotFoundComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ErrorRoutingModule {}

export const routedComponents = [
  ErrorComponent,
  NotFoundComponent,
  ForbiddenComponent
];
