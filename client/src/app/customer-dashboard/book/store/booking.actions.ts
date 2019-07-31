import { Action } from '@ngrx/store';
import { Ticket } from 'src/app/shared/model/ticket-model';
// import { OrderedTicket } from 'src/app/shared/model/ordered-ticket.model';

export enum BookingActionTypes {
    TicketsAdded = '[Booking API] Tickets Added', 
    TicketAdded = '[Booking API] Ticket Added' 

}

export class TicketsAdded implements Action {
    readonly type = BookingActionTypes.TicketsAdded;
    constructor(public payload: {orderedTickets: Ticket[]}) { }
}

export class TicketAdded implements Action {
    readonly type = BookingActionTypes.TicketAdded;
    constructor(public payload: {orderedTicket: Ticket}) { }
}

export type BookingActions = TicketsAdded | TicketAdded;