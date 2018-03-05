import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { IndexComponent } from './index/index.component';
import { CategoryComponent } from './category/category.component';
import { ProductRoutingModule } from './product-routing.module';
import { FormsModule } from '@angular/forms'; // <--- JavaScript import from Angular
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule
  ],
  declarations: [ProductComponent,
    IndexComponent,
    CategoryComponent,
    ListComponent,
    FormComponent
]
})
export class ProductModule { }
