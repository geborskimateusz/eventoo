package server.eventooserver.api.v1.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import server.eventooserver.api.v1.dto.EventsDTO;
import server.eventooserver.api.v1.mapper.EventMapper;
import server.eventooserver.api.v1.repository.EventRepository;
import server.eventooserver.domain.Event;
import server.eventooserver.domain.MusicGenre;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
public class EventServiceImpl implements EventService {

    public static final int EVENTS_PER_PAGE = 6;
    private final EventRepository eventRepository;

    private EventMapper eventMapper = EventMapper.INSTANCE;

    public EventServiceImpl(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    @Override
    @Transactional
    public EventsDTO saveAll(EventsDTO eventsDTO) {

        return EventsDTO.builder()
                .events(
                        eventsDTO.getEvents().stream()
                                .map(eventDTO -> eventMapper.eventDTOtoEvent(eventDTO))
                                .peek(event -> event.getTickets().forEach(event::addTicket))
                                .map(eventRepository::save)
                                .map(event -> eventMapper.eventToEventDTO(event))
                                .collect(Collectors.toList())
                ).build();
    }

    @Override
    public EventsDTO findByGenre(String genre, Integer pageNum) {

        System.out.println(genre + " " + pageNum);

        List<Event> events = new ArrayList<>();

        if (allEventsRequested(genre)) {
            eventRepository.findAll(getPageAbleRequest(pageNum))
                    .iterator().forEachRemaining(events::add);
        } else {
            eventRepository.findByGenre(parseMusicGenre(genre), getPageAbleRequest(pageNum))
                    .get()
                    .iterator().forEachRemaining(events::add);
        }

        log.info("\n\n\n List size = " + events.size() + " \n\n\n");

        return EventsDTO.builder()
                .events(
                        events.stream()
                                .map(eventMapper::eventToEventDTO)
                                .collect(Collectors.toList())
                ).build();
    }

    private boolean allEventsRequested(String genre) {
        return parseMusicGenre(genre).equals(MusicGenre.ALL);
    }

    private MusicGenre parseMusicGenre(String genre) {
        return MusicGenre.valueOf(genre.toUpperCase());
    }

    private Pageable getPageAbleRequest(Integer pageNum) {
        return PageRequest.of(pageNum, EVENTS_PER_PAGE);
    }
}
