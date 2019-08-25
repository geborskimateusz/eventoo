import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component'
import { UnderDevelopmentComponent } from './shared/under-development/under-development.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'welcome'},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'offer', loadChildren: () => import('./customer-dashboard/customer-dashboard.module').then(mod => mod.CustomerDashboardModule)},
  {path: 'underConstruction', component: UnderDevelopmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
