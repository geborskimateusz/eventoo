import { TicketTypes } from './ticket-types.model';

export interface TicketModel {
    id: string,
    type?: TicketTypes;
    price: number,
    total: number,
    inStock: number
}

