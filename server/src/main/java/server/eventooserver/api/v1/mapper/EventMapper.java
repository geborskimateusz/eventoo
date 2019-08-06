package server.eventooserver.api.v1.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Named;
import org.mapstruct.factory.Mappers;
import server.eventooserver.api.v1.dto.EventDTO;
import server.eventooserver.domain.Event;

@Mapper(componentModel = "spring")
public interface EventMapper {

    EventMapper INSTANCE = Mappers.getMapper(EventMapper.class);

    Event eventDTOtoEvent(EventDTO eventDTO);

    EventDTO eventToEventDTO(Event event);
}
