import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
// import { OrderedTicket } from 'src/app/shared/model/ordered-ticket.model';
import { BookingActions, BookingActionTypes } from './booking.actions';
import { Ticket } from 'src/app/shared/model/ticket-model';
import { retry } from 'rxjs/operators';
import { OrderedTicket } from 'src/app/shared/model/ordered-ticket.model';

export interface BookingState extends EntityState<OrderedTicket> {
    loading: boolean;
}

export const adapter: EntityAdapter<OrderedTicket> = createEntityAdapter<OrderedTicket>();

export const initialBookingState: BookingState = adapter.getInitialState({
    loading: false
});

export function bookingReducer(state = initialBookingState, action: BookingActions) {

    switch (action.type) {
        case BookingActionTypes.AddAllTickets:
            return adapter.upsertMany(action.payload.orderedTickets, state);

        case BookingActionTypes.SaveOrUpdateTicket:
            return adapter.upsertOne(action.payload.orderedTicket, state);

        case BookingActionTypes.DeleteTicket:
            return adapter.removeOne(action.payload.ticketId, state);

        case BookingActionTypes.BookTicketsRequest:
            return { ...state, loading: true }

        case BookingActionTypes.OrderCancelled:
            return { ...state, loading: false }

        case BookingActionTypes.TicketsBooked:
            return { ...state, loading: false }

        default: {
            return state;
        }
    }
}

export const { selectAll, selectEntities } = adapter.getSelectors();