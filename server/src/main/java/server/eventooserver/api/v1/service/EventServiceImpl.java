package server.eventooserver.api.v1.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import server.eventooserver.api.v1.dto.EventDTO;
import server.eventooserver.api.v1.dto.EventsDTO;
import server.eventooserver.api.v1.mapper.EventMapper;
import server.eventooserver.api.v1.repository.EventRepository;
import server.eventooserver.domain.Event;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
public class EventServiceImpl implements EventService {

    private final EventRepository eventRepository;

    private EventMapper eventMapper = EventMapper.INSTANCE;

    public EventServiceImpl(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    @Override
    public EventsDTO saveAll(EventsDTO eventsDTO) {

        return EventsDTO.builder()
                .events(
                        eventsDTO.getEvents().stream()
                                .map(eventDTO -> eventRepository.save(eventMapper.eventDTOtoEvent(eventDTO)))
                                .map(event -> eventMapper.eventToEventDTO(event))
                                .collect(Collectors.toList())
                ).build();
    }

    @Override
    public List<EventDTO> findAll() {
        return eventRepository.findAll()
                .stream()
                .map(event -> eventMapper.eventToEventDTO(event))
                .collect(Collectors.toList());
    }
}
