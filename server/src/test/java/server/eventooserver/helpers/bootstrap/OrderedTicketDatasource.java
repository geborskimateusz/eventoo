package server.eventooserver.helpers.bootstrap;

import server.eventooserver.api.v1.dto.OrderedTicketDTO;
import server.eventooserver.api.v1.dto.TicketDTO;
import server.eventooserver.domain.OrderedTicket;
import server.eventooserver.domain.Ticket;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

public class OrderedTicketDatasource {

    public static final TicketDTO TICKET_DTO = TicketDatasource.getTicketDTO();
    public static final int AMOUNT = 5;
    public static final Ticket TICKET = TicketDatasource.getTicket();
    public static final long ID = 1L;

    public static OrderedTicket getOrderedTicket() {
        return OrderedTicket.builder()
                .ticket(TICKET)
                .amount(AMOUNT)
                .build();
    }

    public static OrderedTicketDTO getOrderedTicketDTO() {
        return OrderedTicketDTO.builder()
                .ticket(TICKET_DTO)
                .amount(AMOUNT)
                .build();
    }

    public static Set<OrderedTicket> getOrderedTickets() {
        return new HashSet<>(Arrays.asList(getOrderedTicket(), getOrderedTicket()));
    }
}
