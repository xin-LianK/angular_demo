import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AccountComponent } from './account.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      },
      {
        path: 'index',
        component: IndexComponent
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AccountRoutingModule { }

export const routedComponents = [
  AccountComponent,
  IndexComponent,
  LoginComponent
];
