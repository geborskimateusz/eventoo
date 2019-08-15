package server.eventooserver.api.v1.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import server.eventooserver.api.v1.dto.OrderedTicketDTO;
import server.eventooserver.api.v1.dto.TicketDTO;
import server.eventooserver.domain.Ticket;

@Mapper(componentModel = "spring")
public interface OrderedTicketMapper {

    OrderedTicketMapper INSTANCE = Mappers.getMapper(OrderedTicketMapper.class);

    TicketDTO ticketToTicketDTO(Ticket ticket);

    Ticket ticketDTOToTicket(TicketDTO ticketDTO);


}
