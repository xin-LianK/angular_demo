import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { IndexComponent } from './index/index.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'index',
                component: IndexComponent,
                data: { title: '首页' }
            },
            {
                path: 'list',
                component: ListComponent,
                data: { title: '列表页' }
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'index'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }

export const routedComponents = [
    HomeComponent,
    IndexComponent,
    ListComponent
];
