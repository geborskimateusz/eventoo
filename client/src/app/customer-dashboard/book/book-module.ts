import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BookRoutingModule } from './book-routing-module';
import { TicketComponent } from './ticket/ticket.component';
import { StoreModule } from '@ngrx/store';
import { bookingReducer } from './store/booking.reducers';

@NgModule({
    declarations: [
        BookComponent,
        TicketComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        BookRoutingModule,
        StoreModule.forFeature('booking', bookingReducer)
    ],
    entryComponents: [
        
    ]
})
export class BookModule {}