import { Ticket } from './ticket-model';

export interface OrderedTicket extends Ticket {
    amount: number; 
}