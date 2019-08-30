package server.eventooserver.api.v1.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import server.eventooserver.api.v1.dto.EventsDTO;
import server.eventooserver.api.v1.repository.EventRepository;
import server.eventooserver.domain.Event;
import server.eventooserver.domain.MusicGenre;
import server.eventooserver.helpers.bootstrap.EventDatasource;
import server.eventooserver.helpers.bootstrap.EventsDTOdatasource;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.ArgumentMatchers.booleanThat;
import static org.mockito.Mockito.when;

class EventServiceImplTest {

    public static final String FAKE_GENRE = "fake genre";
    public static final int PAGE_NUM = 1;
    public static final long ID = 1L;
    @Mock
    EventRepository eventRepository;

    EventService eventService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
        eventService = new EventServiceImpl(eventRepository);
    }

    @Test
    void saveAll() {

        Event event = EventDatasource.getEvent();

        EventsDTO given = EventsDTOdatasource.getEventsDTO();

        when(eventRepository.save(any(Event.class))).thenReturn(event);

        EventsDTO actual = eventService.saveAll(given);

        assertEquals(given.getEvents().size(), actual.getEvents().size());

    }

    @Test
    void findByRockGenre() {

        List<Event> events = Arrays.asList(
                EventDatasource.getEvent(),EventDatasource.getEvent());

        Page<Event> event = new PageImpl<>(events);

        when(eventRepository.findByGenre(
                any(MusicGenre.class), any(Pageable.class)))
                .thenReturn(event);


        EventsDTO actual = eventService.findByGenre(MusicGenre.ROCK.name(), PAGE_NUM);

        assertEquals(events.size(), actual.getEvents().size());
    }

    @Test
    void findById() {

        Event event = EventDatasource.getEvent();

        when(eventRepository.findById(anyLong())).thenReturn(Optional.of(event));

        Event actual = eventService.findById(ID);

        assertAll(() -> {
            assertEquals(actual.getTickets().size(), event.getTickets().size());
            assertEquals(actual.getLocation().getFullAddress(), event.getLocation().getFullAddress());
            assertEquals(actual.getTitle(), event.getTitle());
        });
    }
}