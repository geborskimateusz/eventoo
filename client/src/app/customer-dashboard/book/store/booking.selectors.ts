import { BookingState } from './booking.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBooking from './booking.reducers';

export const selectBookingState = createFeatureSelector<BookingState>("booking");


export const selectAllTickets = createSelector(
    selectBookingState,
    fromBooking.selectAll
);