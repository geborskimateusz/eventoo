package server.eventooserver.api.v1.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.factory.Mappers;
import server.eventooserver.api.v1.dto.TicketDTO;
import server.eventooserver.domain.Ticket;

@Mapper(componentModel = "spring")
public interface TicketMapper {

    TicketMapper INSTANCE = Mappers.getMapper(TicketMapper.class);

    Ticket ticketDTOtoTicket(TicketDTO ticketDTO);

    TicketDTO ticketToTicketDTO(Ticket ticket);

}
