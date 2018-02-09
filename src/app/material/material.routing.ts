import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MaterialComponent } from './material.component';
import { IndexComponent } from './index/index.component';
import { TableComponent } from './table/table.component';
import { TableSortComponent } from './table-sort/table-sort.component';

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
      {
        path: 'table-sort',
        component: TableSortComponent
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
