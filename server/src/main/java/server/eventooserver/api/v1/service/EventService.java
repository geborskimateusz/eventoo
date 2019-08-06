package server.eventooserver.api.v1.service;

import server.eventooserver.api.v1.dto.EventsDTO;

public interface EventService {

    EventsDTO saveAll(EventsDTO eventsDTO);
}
