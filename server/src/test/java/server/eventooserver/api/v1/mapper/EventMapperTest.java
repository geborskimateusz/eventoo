package server.eventooserver.api.v1.mapper;

import org.junit.jupiter.api.Test;
import server.eventooserver.api.v1.dto.EventDTO;
import server.eventooserver.domain.Event;
import server.eventooserver.helpers.ObjectStringJoiner;
import server.eventooserver.helpers.bootstrap.EventDTOdatasource;

import static org.junit.jupiter.api.Assertions.*;

class EventMapperTest {

    EventMapper eventMapper = EventMapper.INSTANCE;

    @Test
    void eventDTOtoEvent() {
        
        EventDTO eventDTO = EventDTOdatasource.getEventDTO();
        Event event = eventMapper.eventDTOtoEvent(eventDTO);

        String eventDTOasString = ObjectStringJoiner.join(eventDTO);
        eventDTOasString = ObjectStringJoiner.dtoToPlainDomain(eventDTOasString);

        String eventAsString = ObjectStringJoiner.join(event);

        assertEquals(eventDTOasString, eventAsString);


    }

    @Test
    void setTickets() {
    }

    @Test
    void eventToEventDTO() {
    }
}