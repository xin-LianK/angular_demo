import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './help.component';
import { AboutComponent } from './about/about.component';
import { QaqComponent } from './qaq/qaq.component';

const routes: Routes = [
  {
    path: '',
    component: HelpComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'qaq',
        component: QaqComponent
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
  QaqComponent
];
