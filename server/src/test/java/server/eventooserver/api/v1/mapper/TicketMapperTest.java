package server.eventooserver.api.v1.mapper;

import org.junit.jupiter.api.Test;
import server.eventooserver.api.v1.dto.TicketDTO;
import server.eventooserver.domain.Ticket;
import server.eventooserver.helpers.Comparator;
import server.eventooserver.helpers.bootstrap.TicketDatasource;

class TicketMapperTest {

    TicketMapper ticketMapper = TicketMapper.INSTANCE;

    @Test
    void ticketDTOtoTicket() {
        TicketDTO ticketDTO = TicketDatasource.getTicketDTO();
        Ticket ticket = ticketMapper.ticketDTOtoTicket(ticketDTO);

        Comparator.contains(ticketDTO,ticket);

    }

}