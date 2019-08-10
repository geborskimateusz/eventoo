package server.eventooserver.api.v1.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import server.eventooserver.api.v1.dto.EventDTO;
import server.eventooserver.api.v1.dto.EventsDTO;
import server.eventooserver.api.v1.service.EventService;
import server.eventooserver.domain.MusicGenre;

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

    @GetMapping("/{musicGenre}")
    @ResponseStatus(HttpStatus.OK)
    public EventsDTO findByGenre(@PathVariable String musicGenre,
                                 @RequestParam(value = "page", defaultValue = "0") Integer pageNum) {
        return eventService.findByGenre(musicGenre, pageNum);
    }

    @PutMapping
    @ResponseStatus(HttpStatus.CREATED)
    public EventsDTO saveAll(@RequestBody EventsDTO eventsDTO) {
        return this.eventService.saveAll(eventsDTO);
    }
}
