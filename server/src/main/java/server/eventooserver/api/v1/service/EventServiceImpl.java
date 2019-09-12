package server.eventooserver.api.v1.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import server.eventooserver.api.v1.dto.EventsDTO;
import server.eventooserver.api.v1.mapper.EventMapper;
import server.eventooserver.api.v1.repository.EventRepository;
import server.eventooserver.api.v1.service.exception.ResourceNotFoundException;
import server.eventooserver.domain.Event;
import server.eventooserver.domain.MusicGenre;

import javax.transaction.Transactional;
import java.util.stream.Collectors;

import static server.eventooserver.api.v1.service.util.SharedConstans.DASH;
import static server.eventooserver.api.v1.service.util.SharedConstans.UNDERSCORE;

@Service
@Slf4j
public class EventServiceImpl implements EventService {

    //TODO REFACTOR HARDCODED -> SET VAL BY REQUEST
    public static final int EVENTS_PER_PAGE = 12;

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
                                .peek(System.out::println)
                                .map(event -> eventMapper.eventToEventDTO(event))
                                .collect(Collectors.toList())
                ).build();
    }

    @Override
    public EventsDTO findByGenre(String genre, Integer pageNum) {

        MusicGenre musicGenre = parseMusicGenre(genre);

        Pageable pageAbleRequest = getPageAbleRequest(pageNum);

        Page<Event> eventPage = allEventsRequested(musicGenre) ?
                eventRepository.findAll(pageAbleRequest) :
                eventRepository.findByGenre(musicGenre, pageAbleRequest);

        return EventsDTO.builder()
                .events(
                        eventPage.get()
                                .map(eventMapper::eventToEventDTO)
                                .collect(Collectors.toList())
                ).build();
    }

    @Override
    public Event findById(Long id) {
        return eventRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
    }

    private boolean allEventsRequested(MusicGenre genre) {
        return genre.equals(MusicGenre.ALL);
    }

    private MusicGenre parseMusicGenre(String genre) {
        return MusicGenre.valueOf(genre.toUpperCase().replace(DASH, UNDERSCORE));
    }

    private Pageable getPageAbleRequest(Integer pageNum) {
        return PageRequest.of(pageNum, EVENTS_PER_PAGE);
    }
}
