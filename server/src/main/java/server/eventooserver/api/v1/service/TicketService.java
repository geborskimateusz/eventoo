package server.eventooserver.api.v1.service;

import server.eventooserver.api.v1.dto.TicketDTO;
import server.eventooserver.domain.OrderedTicket;
import server.eventooserver.domain.Ticket;

import java.time.LocalDate;

public interface TicketService {

    Ticket updateTicketByOrderAmount(OrderedTicket orderedTicket);
    TicketDTO saveOrUpdateTicket(TicketDTO ticketDTO);

    TicketDTO findDTOById(Long id);
    Ticket  findById(Long id);
}
