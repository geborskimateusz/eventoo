package server.eventooserver.api.v1.service;

import server.eventooserver.api.v1.dto.OrderDTO;

public interface OrderService {

    void orderTickets(OrderDTO orderedTicketsDTO);
}
