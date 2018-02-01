import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeComponent } from './life.component';
import { SpyComponent } from './spy/spy.component';
import { LifeRoutingModule } from './life-routing.module';
import { LoggerService } from './logger.service';
import { FormsModule } from '@angular/forms'; // <--- JavaScript import from Angular
import { OnChangeComponent } from './on-change/on-change.component';


@NgModule({
  imports: [
    CommonModule,
    LifeRoutingModule,
    FormsModule
  ],
  declarations: [
    LifeComponent,
    SpyComponent,
    OnChangeComponent
],
  providers: [
    LoggerService
  ]
})
export class LifeModule { }
