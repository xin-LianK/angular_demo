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
        component: IndexComponent,
        data: { title: 'Material' }
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'index'
      },
      {
        path: 'table',
        component: TableComponent,
        data: { title: '表格' }
      },
      {
        path: 'table-sort',
        component: TableSortComponent,
        data: { title: '可排序的表格' }
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
