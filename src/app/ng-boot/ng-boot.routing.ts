import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NgBootComponent } from './ng-boot.component';
import { IndexComponent } from './index/index.component';
import { ContantComponent } from './contant/contant.component';

const routes: Routes = [
  {
    path: '',
    component: NgBootComponent,
    children: [
      {
        path: 'index',
        component: IndexComponent
      },
      {
        path: 'contant',
        component: ContantComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'index'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class NgBootRoutingModule { }
export const NgBootRoutes = RouterModule.forChild(routes);
