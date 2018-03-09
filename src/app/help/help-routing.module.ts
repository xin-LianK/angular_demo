import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './help.component';
import { AboutComponent } from './about/about.component';
import { QaqComponent } from './qaq/qaq.component';
import { SosComponent } from './sos/sos.component';

const routes: Routes = [
  {
    path: '',
    component: HelpComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent,
        data:{page:'one'}
      },
      {
        path: 'qaq',
        component: QaqComponent,
        data: { page: 'two' }
        
      },
      {
        path: 'sos',
        component: SosComponent,
        data: { page: 'three' }
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'about'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HelpRoutingModule { }

export const routedComponent = [
  HelpComponent,
  AboutComponent,
  QaqComponent,
  SosComponent
];
