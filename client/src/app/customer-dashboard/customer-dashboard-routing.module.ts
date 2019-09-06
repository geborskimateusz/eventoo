import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDashboardComponent } from './customer-dashboard.component';
import { EventsComponent } from './events/events.component';
import { ServicesComponent } from './services/services.component';
import { EventComponent } from './events/event/event.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from '../auth/auth.guard';
import { EventResolver } from '../shared/event/event.resolver';
import { EventDetailComponent } from './events/event/event-detail/event-detail.component';
import { ShoppingCartListComponent } from './user/shopping-cart-list/shopping-cart-list.component';


const routes: Routes = [
  {
    path: '', component: CustomerDashboardComponent, children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'events'
      },
      { path: 'events', component: EventsComponent },
      {
        path: 'event/:id', component: EventComponent,
        resolve: {
          event: EventResolver
        },
      },
      { path: 'services', component: ServicesComponent },
      {
        path: 'order', loadChildren: () => import('./book/book.module').then(mod => mod.BookModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'user', component: UserComponent,
        canActivate: [AuthGuard],
         children: [
          { path: 'shoppingCart', component: ShoppingCartListComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerDashboardRoutingModule { }