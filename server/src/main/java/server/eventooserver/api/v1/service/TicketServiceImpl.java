package server.eventooserver.api.v1.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import server.eventooserver.api.v1.dto.TicketDTO;
import server.eventooserver.api.v1.mapper.TicketMapper;
import server.eventooserver.api.v1.repository.TicketRepository;
import server.eventooserver.api.v1.service.exception.ResourceNotFoundException;
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
    public TicketDTO findById(Long id) {

        return ticketMapper.ticketToTicketDTO(
                ticketRepository.findById(id).orElseThrow(ResourceNotFoundException::new)
        );

    }
}
