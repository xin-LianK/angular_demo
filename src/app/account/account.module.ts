import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule
  ],
  declarations: [AccountComponent,
    IndexComponent,
    LoginComponent
]
})
export class AccountModule { }