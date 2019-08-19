import { Action } from '@ngrx/store';
import { Ticket } from 'src/app/shared/model/ticket-model';
import { OrderedTicket } from 'src/app/shared/model/ordered-ticket.model';
import { OrderedTickets } from 'src/app/shared/model/order.model';


export enum BookingActionTypes {
    AddAllTickets = '[Booking API] Tickets Added',
    SaveOrUpdateTicket = '[Booking API] Save Or Update Ticket',
    DeleteTicket = '[Booking API] DeleteTicket',
    BookTicketsRequest = '[Booking API] Book Tickets Request',
    TicketsBooked = '[Booking API] Tickets Booked',
    OrderCancelled = '[Booking API] Order Cancelled'
}

export class AddAllTickets implements Action {
    readonly type = BookingActionTypes.AddAllTickets;
    constructor(public payload: { orderedTickets: OrderedTicket[] }) { }
}

export class SaveOrUpdateTicket implements Action {
    readonly type = BookingActionTypes.SaveOrUpdateTicket;
    constructor(public payload: { orderedTicket: OrderedTicket }) { }
}

export class DeleteTicket implements Action {
    readonly type = BookingActionTypes.DeleteTicket;
    constructor(public payload: { ticketId: number }) { }
}

export class BookTicketsRequest implements Action {
    readonly type = BookingActionTypes.BookTicketsRequest;
    constructor(public payload: {orderedTickets: OrderedTicket[]}) {
    }
}

export class TicketsBooked implements Action {
    readonly type = BookingActionTypes.TicketsBooked;
    constructor(public payload: {latestInvoice: string}) { }
}

export class OrderCancelled implements Action {
    readonly type = BookingActionTypes.OrderCancelled;
    constructor() { }
}

export type BookingActions =
    AddAllTickets |
    SaveOrUpdateTicket |
    DeleteTicket |
    BookTicketsRequest |
    TicketsBooked |
    OrderCancelled;