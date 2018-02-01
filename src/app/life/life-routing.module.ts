import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LifeComponent } from './life.component';
import { SpyComponent } from './spy/spy.component';
import { OnChangeComponent } from './on-change/on-change.component';

const routes: Routes = [
  {
    path: '',
    component: LifeComponent,
    children: [
      {
        path: 'spy',
        component: SpyComponent
      },
      {
        path: 'change',
        component: OnChangeComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'change'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LifeRoutingModule { }

export const routedComponents = [
  LifeComponent,
  SpyComponent
];
