import { NgModule } from "@angular/core";
import { CustomerDashboardComponent } from './customer-dashboard.component';
import { CommonModule } from '@angular/common';
import { CustomerDashboardRoutingModule } from './customer-dashboard-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { EventsComponent } from './events/events.component';
import { MaterialModule } from '../material.module';
import { ServicesComponent } from './services/services.component';
import { EventComponent } from './events/event/event.component';
import { UserComponent } from './user/user.component';
import { EventRatesComponent } from './events/event/event-rates/event-rates.component';
import { EventCtaComponent } from './events/event/event-cta/event-cta.component';
import { UserReviewsComponent } from './events/event/user-reviews/user-reviews.component';
import { EventDetailComponent } from './events/event/event-detail/event-detail.component';
import { EventOverviewComponent } from '../shared/event/event-overview/event-overview.component';

import { SharedModule } from '../shared/shared.module';
import { EventResolver } from '../shared/event/event.resolver';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { eventsReducer } from './events/store/events.reducers';
import { EventsEffects } from './events/store/events.effects';
import { EventsCardListComponent } from './events/events-card-list/events-card-list.component';
import { TicketsComponent } from './book/tickets/tickets.component';
import { UserDetailsComponent } from './book/account-details/user-details/user-details.component';
import { CompanyDetailsComponent } from './book/account-details/company-details/company-details.component';
import { ShoppingCartComponent } from './navbar/shopping-cart/shopping-cart.component';
import { customerDashboardReducers } from './store/customer-dashboard.reducers';
import { ShoppingCartListComponent } from './user/shopping-cart-list/shopping-cart-list.component';


@NgModule({
    declarations: [
        CustomerDashboardComponent,
        NavbarComponent,
        SidenavComponent,
        EventsComponent,
        ServicesComponent,
        EventComponent,
        ShoppingCartComponent,
        UserComponent,
        EventRatesComponent,
        EventCtaComponent,
        UserReviewsComponent,
        EventDetailComponent,
        EventsCardListComponent,
        ShoppingCartListComponent,
    ],
    imports: [
        CustomerDashboardRoutingModule,
        MaterialModule,
        CommonModule,
        SharedModule,
        StoreModule.forFeature('customerDashboard', customerDashboardReducers),
        // StoreModule.forFeature('events', eventsReducer),
        EffectsModule.forFeature([EventsEffects])
    ],
    providers: [
        EventResolver
    ], 
    entryComponents: [
    ]
})
export class CustomerDashboardModule {}