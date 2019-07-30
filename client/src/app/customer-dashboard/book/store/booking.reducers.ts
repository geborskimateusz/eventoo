import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { OrderedTicket } from 'src/app/shared/model/ordered-ticket.model';
import { BookingActions, BookingActionTypes } from './booking.actions';

export interface BookingState extends EntityState<OrderedTicket> { }

export const adapter: EntityAdapter<OrderedTicket> = createEntityAdapter<OrderedTicket>();

export const initialBookingState: BookingState = adapter.getInitialState();

export function bookingReducer(state = initialBookingState, action: BookingActions) {
    switch (action.type) {
        case BookingActionTypes.TicketAdded:
            return adapter.addOne(action.payload.orderedTicket, state);

        default: {
            return state;
        }
    }
}