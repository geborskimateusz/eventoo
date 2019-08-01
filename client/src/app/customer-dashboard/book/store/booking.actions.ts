import { Action } from '@ngrx/store';
import { Ticket } from 'src/app/shared/model/ticket-model';
// import { OrderedTicket } from 'src/app/shared/model/ordered-ticket.model';

export enum BookingActionTypes {
    AddAllTickets = '[Booking API] Tickets Added', 
    SaveOrUpdateTicket = '[Booking API] Save Or Update Ticket' 

}

export class AddAllTickets implements Action {
    readonly type = BookingActionTypes.AddAllTickets;
    constructor(public payload: {orderedTickets: Ticket[]}) { }
}

export class SaveOrUpdateTicket implements Action {
    readonly type = BookingActionTypes.SaveOrUpdateTicket;
    constructor(public payload: {orderedTicket: Ticket}) { }
}

export type BookingActions = AddAllTickets | SaveOrUpdateTicket;