package server.eventooserver.api.v1.mapper;

import org.junit.jupiter.api.Test;
import server.eventooserver.api.v1.dto.EventDTO;
import server.eventooserver.domain.Event;
import server.eventooserver.helpers.Comparator;
import server.eventooserver.helpers.bootstrap.EventDatasource;

class EventMapperTest {

    EventMapper eventMapper = EventMapper.INSTANCE;

    @Test
    void eventDTOtoEvent() {

        EventDTO eventDTO = EventDatasource.getEventDTO();
        Event event = eventMapper.eventDTOtoEvent(eventDTO);

        Comparator.contains(eventDTO, event);

    }

    @Test
    void eventToEventDTO() {

        Event event = EventDatasource.getEvent();
        EventDTO eventDTO = eventMapper.eventToEventDTO(event);

        Comparator.contains(eventDTO,event);

    }
}