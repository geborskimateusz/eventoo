package server.eventooserver.api.v1.service;

import server.eventooserver.api.v1.dto.OrderedTicketsDTO;

public interface OrderService {

    void orderTickets(OrderedTicketsDTO orderedTicketsDTO);
}
