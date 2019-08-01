import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
// import { OrderedTicket } from 'src/app/shared/model/ordered-ticket.model';
import { BookingActions, BookingActionTypes } from './booking.actions';
import { Ticket } from 'src/app/shared/model/ticket-model';

export interface BookingState extends EntityState<Ticket> { }

export const adapter: EntityAdapter<Ticket> = createEntityAdapter<Ticket>();

export const initialBookingState: BookingState = adapter.getInitialState();

export function bookingReducer(state = initialBookingState, action: BookingActions) {

    switch (action.type) {
        case BookingActionTypes.AddAllTickets:
            return adapter.upsertMany(action.payload.orderedTickets, state);

        case BookingActionTypes.SaveOrUpdateTicket:
            return adapter.upsertOne(action.payload.orderedTicket, state);

        default: {
            return state;
        }
    }
}

export const { selectAll } = adapter.getSelectors();