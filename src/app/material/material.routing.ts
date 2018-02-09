import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MaterialComponent } from './material.component';
import { IndexComponent } from './index/index.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path: '',
    component: MaterialComponent,
    children: [
      {
        path: 'index',
        component: IndexComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'index'
      },
      {
        path: 'table',
        component: TableComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MaterialRoutingModule { }
export const MaterialRoutes = RouterModule.forChild(routes);
