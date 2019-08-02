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

@NgModule({
    declarations: [
        BookComponent,
        TicketComponent,
        TicketsComponent,
        AccountDetailsComponent,
        UserDetailsComponent,
        CompanyDetailsComponent,
        FinalizeOrderDialogComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        BookRoutingModule,
        StoreModule.forFeature('booking', bookingReducer)
    ],
    entryComponents: [
        FinalizeOrderDialogComponent
    ]
})
export class BookModule {}