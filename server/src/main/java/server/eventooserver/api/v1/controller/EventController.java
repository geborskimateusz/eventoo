package server.eventooserver.api.v1.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import server.eventooserver.api.v1.dto.EventDTO;
import server.eventooserver.api.v1.dto.EventsDTO;
import server.eventooserver.api.v1.service.EventService;
import server.eventooserver.domain.Event;

public class EventController {

    private static final String API_V1_EVENTS = "api/v1/events";

    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public EventsDTO saveAll(@RequestBody EventsDTO eventsDTO) {
        return this.eventService.saveAll(eventsDTO);
    }
}
