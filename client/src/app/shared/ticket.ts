import { TicketTypes } from './ticket-types.model';

export interface TicketModel {
    type?: TicketTypes;
    price: number,
    total: number,
    inStock: number
}

