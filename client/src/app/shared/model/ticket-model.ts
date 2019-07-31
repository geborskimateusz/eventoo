import { TicketTypes } from './ticket-types.model';

export interface Ticket {
    id: string,
    type?: TicketTypes;
    price: number,
    total: number,
    inStock: number,
    ammount?: number
}

