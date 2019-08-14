package server.eventooserver.api.v1.mapper;

import org.mapstruct.*;
import org.mapstruct.factory.Mappers;
import server.eventooserver.api.v1.dto.EventDTO;
import server.eventooserver.domain.Event;

@Mapper(componentModel = "spring")
public interface EventMapper {

    EventMapper INSTANCE = Mappers.getMapper(EventMapper.class);

    Event eventDTOtoEvent(EventDTO eventDTO);


    @BeforeMapping
    default void setTickets(@MappingTarget EventDTO eventDTO, Event event) {
        event.getTickets().forEach(ticket -> ticket.setEvent(null));
    }

//    @Mapping(target = "tickets", ignore = true)
    EventDTO eventToEventDTO(Event event);




}
