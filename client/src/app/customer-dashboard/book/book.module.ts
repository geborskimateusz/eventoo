import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BookRoutingModule } from './book-routing-module';
import { TicketComponent } from './ticket/ticket.component';
import { StoreModule } from '@ngrx/store';
import { bookingReducer } from './store/booking.reducers';
import { TicketsComponent } from './tickets/tickets.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { UserDetailsComponent } from './account-details/user-details/user-details.component';
import { CompanyDetailsComponent } from './account-details/company-details/company-details.component';
import { FinalizeOrderDialogComponent } from './finalize-order-dialog/finalize-order-dialog.component';
import { PaymentOptionsComponent } from './payment-options/payment-options.component';
import { BookingEffects } from './store/booking.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    declarations: [
        BookComponent,
        TicketComponent,
        TicketsComponent,
        AccountDetailsComponent,
        UserDetailsComponent,
        CompanyDetailsComponent,
        FinalizeOrderDialogComponent,
        PaymentOptionsComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        BookRoutingModule,
        StoreModule.forFeature('booking', bookingReducer),
        EffectsModule.forFeature([BookingEffects])
    ],
    entryComponents: [
        FinalizeOrderDialogComponent
    ]
})
export class BookModule {}