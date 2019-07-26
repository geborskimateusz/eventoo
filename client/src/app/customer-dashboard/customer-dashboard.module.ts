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
import { ShoppingCart } from './user/shopping-cart/shopping-cart-component';
import { BookmarksComponent } from './user/bookmarks/bookmarks.component';
import { UserComponent } from './user/user.component';
import { EventRatesComponent } from './events/event/event-rates/event-rates.component';
import { EventCtaComponent } from './events/event/event-cta/event-cta.component';
import { UserReviewsComponent } from './events/event/user-reviews/user-reviews.component';
import { EventDetailComponent } from './events/event/event-detail/event-detail.component';
import { EventOverviewComponent } from './events/event/event-overview/event-overview.component';

import { SharedModule } from '../shared/shared.module';
import { EventResolver } from './events/event/event.resolver';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { eventsReducer } from './events/store/events.reducers';
import { EventsEffects } from './events/store/events.effects';
import { EventsCardListComponent } from './events/events-card-list/events-card-list.component';


@NgModule({
    declarations: [
        CustomerDashboardComponent,
        NavbarComponent,
        SidenavComponent,
        EventsComponent,
        ServicesComponent,
        EventComponent,
        ShoppingCart,
        BookmarksComponent,
        UserComponent,
        EventRatesComponent,
        EventCtaComponent,
        UserReviewsComponent,
        EventDetailComponent,
        EventOverviewComponent,
        EventsCardListComponent,
    ],
    imports: [
        CustomerDashboardRoutingModule,
        MaterialModule,
        CommonModule,
        SharedModule,
        StoreModule.forFeature('events', eventsReducer),
        EffectsModule.forFeature([EventsEffects])
    ],
    providers: [
        EventResolver
    ], 
    entryComponents: [
    ]
})
export class CustomerDashboardModule {}