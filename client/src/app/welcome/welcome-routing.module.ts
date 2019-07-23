import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { AboutComponent } from './main/about/about.component';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
    { path: 'about', component: WelcomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        anchorScrolling: 'enabled'
    })],
    exports: [RouterModule]
})

export class WelcomeRoutingModule { }