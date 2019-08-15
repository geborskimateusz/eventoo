package server.eventooserver.api.v1.service;

import server.eventooserver.api.v1.dto.InvoiceDTO;

public interface OrderService {

    void orderTickets(InvoiceDTO orderedTicketsDTO);
}
