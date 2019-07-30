import { Action } from '@ngrx/store';
import { OrderedTicket } from 'src/app/shared/model/ordered-ticket.model';

export enum BookingActionTypes {
    TicketsAdded = '[Booking API] Tickets Added', 
    TicketAdded = '[Booking API] Ticket Added' 

}

export class TicketsAdded implements Action {
    readonly type = BookingActionTypes.TicketsAdded;
    constructor(public payload: {orderedTickets: OrderedTicket[]}) { }
}

export class TicketAdded implements Action {
    readonly type = BookingActionTypes.TicketAdded;
    constructor(public payload: {orderedTicket: OrderedTicket}) { }
}

export type BookingActions = TicketsAdded | TicketAdded;