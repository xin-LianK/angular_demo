import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { IndexComponent } from './index/index.component';
import { CategoryComponent } from './category/category.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  declarations: [ProductComponent,
    IndexComponent,
    CategoryComponent
  ]
})
export class ProductModule { }
