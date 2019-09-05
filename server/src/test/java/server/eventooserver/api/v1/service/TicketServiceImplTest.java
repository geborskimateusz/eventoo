package server.eventooserver.api.v1.service;

import org.aspectj.lang.annotation.Before;
import org.hibernate.dialect.Ingres9Dialect;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import server.eventooserver.api.v1.dto.OrderedTicketDTO;
import server.eventooserver.api.v1.dto.TicketDTO;
import server.eventooserver.api.v1.repository.TicketRepository;
import server.eventooserver.domain.OrderedTicket;
import server.eventooserver.domain.Ticket;
import server.eventooserver.helpers.bootstrap.OrderedTicketDatasource;
import server.eventooserver.helpers.bootstrap.TicketDatasource;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.*;

class TicketServiceImplTest {

    public static final long ID = 1L;
    @Mock
    TicketRepository ticketRepository;

    TicketService ticketService;

    public TicketServiceImplTest() {
        MockitoAnnotations.initMocks(this);
        ticketService = new TicketServiceImpl(ticketRepository);
    }

    @Test
    void saveOrUpdateTicket() {
        Ticket ticket = TicketDatasource.getTicket();
        TicketDTO given = TicketDatasource.getTicketDTO();

        when(ticketRepository.save(any(Ticket.class))).thenReturn(ticket);

        TicketDTO saved = ticketService.saveOrUpdateTicket(given);

        assertAll(() -> {
            assertEquals(given.getType(), saved.getType());
            assertEquals(given.getInStock(), saved.getInStock());
        });
    }

    @Test
    void findById() {

        Ticket ticket = TicketDatasource.getTicket();

        when(ticketRepository.findById(ticket.getId())).thenReturn(Optional.of(ticket));

        Ticket actual = ticketService.findById(ticket.getId());

        assertAll(() -> {
            assertEquals(ticket.getType(), actual.getType());
            assertEquals(ticket.getInStock(), actual.getInStock());
        });

    }

    @Test
    void findDTOById() {

        Ticket ticket = TicketDatasource.getTicket();

        when(ticketRepository.findById(ticket.getId())).thenReturn(Optional.of(ticket));

        TicketDTO actual = ticketService.findDTOById(ticket.getId());

        assertAll(() -> {
            assertEquals(ticket.getType(), actual.getType());
            assertEquals(ticket.getInStock(), actual.getInStock());
        });
    }


    @Test
    void updateTicketByOrderAmount() {

        OrderedTicket orderedTicket = OrderedTicketDatasource.getOrderedTicket();
        orderedTicket.setId(ID);

        Ticket ticket = TicketDatasource.getTicket();
        ticket.setId(ID);

        orderedTicket.setTicket(ticket);

        when(ticketRepository.findById(orderedTicket.getTicket().getId())).thenReturn(Optional.of(ticket));
        when(ticketRepository.save(any(Ticket.class))).thenReturn(ticket);


        Ticket actual = ticketService.updateTicketByOrderAmount(orderedTicket);

        assertNotNull(actual);

    }
}