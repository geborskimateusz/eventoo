package server.eventooserver.api.v1.mapper;

import org.mapstruct.*;
import org.mapstruct.factory.Mappers;
import server.eventooserver.api.v1.dto.EventDTO;
import server.eventooserver.api.v1.dto.TicketDTO;
import server.eventooserver.domain.Event;
import server.eventooserver.domain.Ticket;

@Mapper(componentModel = "spring")
public interface TicketMapper {

    TicketMapper INSTANCE = Mappers.getMapper(TicketMapper.class);

    Ticket ticketDTOtoTicket(TicketDTO ticketDTO);

    @Mapping(target = "event.tickets", ignore = true)
    TicketDTO ticketToTicketDTO(Ticket ticket);

}
