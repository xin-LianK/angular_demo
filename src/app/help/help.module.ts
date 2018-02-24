import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from './help.component';
import { QaqComponent } from './qaq/qaq.component';
import { AboutComponent } from './about/about.component';
import { HelpRoutingModule } from './help-routing.module';
import { UserPipe } from './user.pipe';

@NgModule({
  imports: [
    CommonModule,
    HelpRoutingModule
  ],
  declarations: [
    HelpComponent,
    QaqComponent,
    AboutComponent,
    UserPipe
]
})
export class HelpModule { }