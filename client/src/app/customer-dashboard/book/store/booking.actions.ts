import { Action } from '@ngrx/store';
import { Ticket } from 'src/app/shared/model/ticket-model';
import { OrderedTicket } from 'src/app/shared/model/ordered-ticket.model';
// import { OrderedTicket } from 'src/app/shared/model/ordered-ticket.model';

export enum BookingActionTypes {
    AddAllTickets = '[Booking API] Tickets Added',
    SaveOrUpdateTicket = '[Booking API] Save Or Update Ticket',
    DeleteTicket = '[Booking API] DeleteTicket'
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

export type BookingActions =
    AddAllTickets |
    SaveOrUpdateTicket |
    DeleteTicket;