import { BookingState } from './booking.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBooking from './booking.reducers';
import { map } from 'leaflet';
import { tap } from 'rxjs/operators';

export const selectBookingState = createFeatureSelector<BookingState>("booking");


export const selectAllTickets = createSelector(
    selectBookingState,
    fromBooking.selectAll
);

export const selectTotalPrice = createSelector(
    selectAllTickets,
    tickets => tickets.reduce((acc, ticket) =>  acc + (ticket.price * ticket.ammount), 0)
)