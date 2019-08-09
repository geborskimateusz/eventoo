import { OrderedTicket } from './ordered-ticket.model';

export  interface Order {
    orderDate: Date,
    orderedTickets: OrderedTicket[]
}