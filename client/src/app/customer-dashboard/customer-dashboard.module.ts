import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '../material.module';
import { EventResolver } from '../shared/event/event.resolver';
import { SharedModule } from '../shared/shared.module';
import { CustomerDashboardRoutingModule } from './customer-dashboard-routing.module';
import { CustomerDashboardComponent } from './customer-dashboard.component';
import { EventCtaComponent } from './events/event/event-cta/event-cta.component';
import { EventDetailComponent } from './events/event/event-detail/event-detail.component';
import { EventComponent } from './events/event/event.component';
import { UserReviewsComponent } from './events/event/user-reviews/user-reviews.component';
import { EventsCardListComponent } from './events/events-card-list/events-card-list.component';
import { EventsComponent } from './events/events.component';
import { EventsEffects } from './events/store/events.effects';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchBarComponent } from './navbar/search-bar/search-bar.component';
import { ShoppingCartComponent } from './navbar/shopping-cart/shopping-cart.component';
import { ShoppingCartEffects } from './navbar/shopping-cart/store/shopping-cart.effects';
import { ServicesComponent } from './services/services.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { customerDashboardReducers } from './store/customer-dashboard.reducers';
import { ShoppingCartListComponent } from './user/shopping-cart-list/shopping-cart-list.component';
import { UserComponent } from './user/user.component';



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
        EventCtaComponent,
        UserReviewsComponent,
        EventDetailComponent,
        EventsCardListComponent,
        ShoppingCartListComponent,
        SearchBarComponent,
    ],
    imports: [
        CustomerDashboardRoutingModule,
        MaterialModule,
        CommonModule,
        SharedModule,
        StoreModule.forFeature('customerDashboard', customerDashboardReducers),
        EffectsModule.forFeature([EventsEffects, ShoppingCartEffects])
    ],
    providers: [
        EventResolver
    ], 
    entryComponents: [
    ]
})
export class CustomerDashboardModule {}