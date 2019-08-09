package server.eventooserver.api.v1.service;

import server.eventooserver.api.v1.dto.TicketDTO;

public interface TicketService {

    TicketDTO saveOrUpdateTicket(TicketDTO ticketDTO);

    TicketDTO findById(Long id);
}
