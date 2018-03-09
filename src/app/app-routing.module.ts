import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { HnResolver } from './hn.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    resolve: { message: HnResolver }
  },
  {
    path: 'account',
    loadChildren: './account/account.module#AccountModule'
  },
  {
    path: 'product',
    loadChildren: './product/product.module#ProductModule'
  },
  {
    path: 'material',
    loadChildren: './material/material.module#MaterialModule'
  },
  {
    path: 'help',
    loadChildren: './help/help.module#HelpModule'
  },
  {
    path: 'life',
    loadChildren: './life/life.module#LifeModule'
  },
  {
    path: 'bootstrap',
    loadChildren: './ng-boot/ng-boot.module#NgBootModule'
  },
  {
    path: '**',
    loadChildren: './error/error.module#ErrorModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [HnResolver]
})

export class AppRoutingModule {

}
