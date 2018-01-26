import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { AccountRoutingModule } from './account-routing.module';
import { RegisterComponent } from './register/register.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [AccountComponent,
    IndexComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class AccountModule { }