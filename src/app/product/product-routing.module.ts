import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { IndexComponent } from './index/index.component';
import { CategoryComponent } from './category/category.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path: 'index',
        component: IndexComponent
      },
      {
        path: 'category',
        component: CategoryComponent
      },
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: '',
        redirectTo: 'index',
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductRoutingModule { }

export const ProductRoutes = [
  ProductComponent,
  IndexComponent,
  CategoryComponent
];
