import { TicketTypes } from './ticket-types.model';

export interface Ticket {
    id: number,
    type?: TicketTypes;
    price: number,
    total: number,
    inStock: number,
    ammount?: number
}

