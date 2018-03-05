import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { MyDirective } from './my.directive';
import { FunPipe } from './fun.pipe';
import { SomeService } from './some.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoreComponent,
    MyDirective,
    FunPipe
  ],
  exports: [
    FunPipe,
    MyDirective
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [SomeService]
    }
  }
}