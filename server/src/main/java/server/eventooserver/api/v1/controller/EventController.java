package server.eventooserver.api.v1.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import server.eventooserver.api.v1.dto.EventDTO;
import server.eventooserver.api.v1.dto.EventsDTO;
import server.eventooserver.api.v1.service.EventService;
import server.eventooserver.domain.Event;

import java.util.List;

@Slf4j
@CrossOrigin(value = "${cors.origin.value}")
@RestController
@RequestMapping(EventController.API_V1_EVENTS)
public class EventController {

    public static final String API_V1_EVENTS = "api/v1/events";

    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<EventDTO> findAll() {
        return eventService.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public EventsDTO saveAll(@RequestBody EventsDTO eventsDTO) {
        return this.eventService.saveAll(eventsDTO);
    }
}
