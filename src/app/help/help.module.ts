import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from './help.component';
import { QaqComponent } from './qaq/qaq.component';
import { AboutComponent } from './about/about.component';
import { HelpRoutingModule } from './help-routing.module';
import { UserPipe } from './user.pipe';
import { ContantComponent } from './contant/contant.component';
import { ShadowDirective } from './shadow.directive';
import { SosComponent } from './sos/sos.component';


@NgModule({
  imports: [
    CommonModule,
    HelpRoutingModule,
  ],
  declarations: [
    HelpComponent,
    QaqComponent,
    AboutComponent,
    UserPipe,
    ContantComponent,
    ShadowDirective,
    SosComponent
]
})
export class HelpModule { }