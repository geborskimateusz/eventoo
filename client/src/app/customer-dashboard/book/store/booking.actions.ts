import { Action } from '@ngrx/store';
import { TicketModel } from 'src/app/shared/model/ticket-model';
import { OrderedTicket } from 'src/app/shared/model/ordered-ticket.model';

export enum BookingActionTypes {
    TicketAdded = '[Booking API] Ticket Added' 
}

export class TicketAdded implements Action {
    readonly type = BookingActionTypes.TicketAdded;
    constructor(public payload: {orderedTickets: OrderedTicket[]}) { }
}

export type BookingActions = TicketAdded;