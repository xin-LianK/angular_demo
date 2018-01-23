import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { IndexComponent } from './index/index.component';
import { CategoryComponent } from './category/category.component';

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
