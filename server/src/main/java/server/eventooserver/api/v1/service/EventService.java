package server.eventooserver.api.v1.service;

import server.eventooserver.api.v1.dto.EventDTO;
import server.eventooserver.api.v1.dto.EventsDTO;
import server.eventooserver.domain.MusicGenre;

import java.util.List;

public interface EventService {

    EventsDTO saveAll(EventsDTO eventsDTO);

//    List<EventDTO> findAll();
    EventsDTO findByGenre(String genre, Integer pageNum);
}
