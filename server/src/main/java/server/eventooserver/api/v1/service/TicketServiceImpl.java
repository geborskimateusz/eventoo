package server.eventooserver.api.v1.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import server.eventooserver.api.v1.dto.InvoiceDTO;
import server.eventooserver.api.v1.dto.OrderedTicketDTO;
import server.eventooserver.api.v1.dto.TicketDTO;
import server.eventooserver.api.v1.mapper.TicketMapper;
import server.eventooserver.api.v1.repository.TicketRepository;
import server.eventooserver.api.v1.service.exception.ResourceNotFoundException;
import server.eventooserver.domain.OrderedTicket;
import server.eventooserver.domain.Ticket;

import java.util.Optional;

@Slf4j
@Service
public class TicketServiceImpl implements TicketService {

    private TicketMapper ticketMapper = TicketMapper.INSTANCE;

    private final TicketRepository ticketRepository;

    public TicketServiceImpl(TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
    }

    @Override
    public TicketDTO saveOrUpdateTicket(TicketDTO ticketDTO) {

        log.info("public TicketDTO saveOrUpdateTicket(TicketDTO ticketDTO) -> " + ticketDTO.toString());

        return ticketMapper.ticketToTicketDTO(
                ticketRepository.save(
                        ticketMapper.ticketDTOtoTicket(ticketDTO)
                ));
    }

    @Override
    public Ticket findById(Long id) {
        return ticketRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
    }

    @Override
    public TicketDTO findDTOById(Long id) {

        return ticketMapper.ticketToTicketDTO(
                findById(id)
        );
    }

    @Override
    public Ticket updateTicketByOrderAmount(OrderedTicket orderedTicket) {
        Ticket found = findById(orderedTicket.getId());

        decreaseInStockAmount(orderedTicket, found);

        return ticketMapper.ticketDTOtoTicket(
                saveOrUpdateTicket(
                        ticketMapper.ticketToTicketDTO(found)
                )
        );
    }

    private void decreaseInStockAmount(OrderedTicket ticket, Ticket found) {
        found.setInStock(
                found.getInStock() - ticket.getAmount()
        );
    }
}
