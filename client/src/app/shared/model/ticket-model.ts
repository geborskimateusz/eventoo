import { TicketTypes } from './ticket-types.model';

export interface TicketModel {
    id: number,
    type?: TicketTypes;
    price: number,
    total: number,
    inStock: number
}

