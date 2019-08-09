import { OrderedTicket } from './ordered-ticket.model';

export  interface OrderedTickets {
    orderDate: Date,
    orderedTickets: OrderedTicket[]
}