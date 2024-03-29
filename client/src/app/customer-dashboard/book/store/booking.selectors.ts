import { BookingState } from './booking.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBooking from './booking.reducers';

export const selectBookingState = createFeatureSelector<BookingState>("booking");


export const selectAllTickets = createSelector(
    selectBookingState,
    fromBooking.selectAll
);

export const selectEntities = createSelector(
    selectBookingState,
    fromBooking.selectEntities
);

export const selectTotalPrice = createSelector(
    selectAllTickets,
    tickets => tickets.reduce((acc, ticket) => acc + (ticket.price * ticket.amount), 0)
)

export const selectPricePerType = createSelector(
    selectEntities,
    (entities, props) =>  {
        let entity  = entities[props.ticketId];

        if(entity) {
            return entity.price * entity.amount;
        }
    }
);

export const selectBookingLoading = createSelector(
    selectBookingState,
    state => state.loading
)

export const selectLatestInvoice = createSelector(
    selectBookingState,
    state => state.latestInvoice
)