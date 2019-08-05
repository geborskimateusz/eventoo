import { TicketTypes } from './ticket-types.model';

export interface Ticket {
    id: number,
    type?: TicketTypes;
    price: number,
    totalAmmount: number,
    inStock: number,
}

