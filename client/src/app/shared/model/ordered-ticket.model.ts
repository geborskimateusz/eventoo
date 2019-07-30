import { TicketModel } from './ticket-model';

export interface OrderedTicket extends TicketModel {
    ammount: number; 
}