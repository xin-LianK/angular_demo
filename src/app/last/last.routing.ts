import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LastComponent } from './last.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: '',
    component: LastComponent,
    children: [
      {
        path: 'index',
        component: IndexComponent
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

export class LastRoutingModule { }
export const LastRoutes = RouterModule.forChild(routes);
