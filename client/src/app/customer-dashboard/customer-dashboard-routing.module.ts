import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDashboardComponent } from './customer-dashboard.component';
import { EventsComponent } from './events/events.component';
import { ServicesComponent } from './services/services.component';
import { EventComponent } from './events/event/event.component';
import { BookComponent } from './book/book.component';
import { UserComponent } from './user/user.component';
import { ShoppingCart } from './user/shopping-cart/shopping-cart-component';
import { EventRatesComponent } from './events/event/event-rates/event-rates.component';
import { AuthGuard } from '../auth/auth.guard';


const routes: Routes = [
  {
    path: '', component: CustomerDashboardComponent, children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'events'
      },
      { path: 'events', component: EventsComponent },
      { path: 'event', component: EventComponent },
      { path: 'eventRates', component: EventRatesComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'order', component: BookComponent, canActivate: [AuthGuard] },
      {
        path: 'user', component: UserComponent, canActivate: [AuthGuard], children: [
          { path: 'bookmarks', component: BookComponent },
          { path: 'shoppingCart', component: ShoppingCart }
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