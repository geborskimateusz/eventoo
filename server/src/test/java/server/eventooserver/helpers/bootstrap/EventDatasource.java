package server.eventooserver.helpers.bootstrap;

import server.eventooserver.api.v1.dto.EventDTO;
import server.eventooserver.api.v1.dto.LocationDTO;
import server.eventooserver.api.v1.dto.TicketDTO;
import server.eventooserver.domain.Event;
import server.eventooserver.domain.Location;
import server.eventooserver.domain.MusicGenre;
import server.eventooserver.domain.Ticket;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;

public class EventDatasource {

    public static final String FAKE_TITLE = "Fake Title";
    public static final String FAKE_DESCRIPTION = "Fake Description";
    public static final LocalDate DATE = LocalDate.now();
    public static final String FAKE_IMAGE_URL = "Fake image url";
    public static final MusicGenre ROCK = MusicGenre.ROCK;
    public static final LocationDTO LOCATION_DTO = LocationDatsource.getLocationDTO();
    public static final Location LOCATION = LocationDatsource.getLocation();
    public static final TicketDTO TICKET_DTO = TicketDatasource.getTicketDTO();
    public static final Ticket TICKET = TicketDatasource.getTicket();

    public static Event getEvent() {
        return Event.builder()
                .title(FAKE_TITLE)
                .description(FAKE_DESCRIPTION)
                .date(DATE)
                .img(FAKE_IMAGE_URL)
                .genre(ROCK)
                .location(LOCATION)
                .tickets(
                        new HashSet<>(
                                Arrays.asList(
                                        TICKET
                                ))
                )
                .build();
    }

    public static EventDTO getEventDTO() {
        return EventDTO.builder()
                .title(FAKE_TITLE)
                .description(FAKE_DESCRIPTION)
                .date(DATE)
                .img(FAKE_IMAGE_URL)
                .genre(ROCK)
                .location(LOCATION_DTO)
                .tickets(
                        new HashSet<>(
                                Arrays.asList(
                                        TICKET_DTO
                        ))
                )
                .build();
    }

    public static List<EventDTO> getEventDTOs() {
        return Arrays.asList(getEventDTO(), getEventDTO());
    }
}
