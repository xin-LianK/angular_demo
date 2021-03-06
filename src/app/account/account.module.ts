import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { AccountRoutingModule } from './account-routing.module';
import { RegisterComponent } from './register/register.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RainbowDirective } from './rainbow.directive';
import { RatingInputComponent } from './rating-input/rating-input.component';

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
    RegisterComponent,
    RainbowDirective,
    RatingInputComponent
]
})
export class AccountModule { }