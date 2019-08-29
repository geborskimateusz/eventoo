package server.eventooserver.helpers.bootstrap;

import server.eventooserver.api.v1.dto.EventDTO;
import server.eventooserver.api.v1.dto.LocationDTO;
import server.eventooserver.api.v1.dto.TicketDTO;
import server.eventooserver.domain.MusicGenre;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.HashSet;

public class EventDTOdatasource {

    public static final String FAKE_TITLE = "Fake Title";
    public static final String FAKE_DESCRIPTION = "Fake Description";
    public static final LocalDate DATE = LocalDate.now();
    public static final String FAKE_IMAGE_URL = "Fake image url";
    public static final MusicGenre ROCK = MusicGenre.ROCK;
    public static final LocationDTO LOCATION_DTO = LocationDTOdatsource.getLocationDTO();
    public static final TicketDTO TICKET_DTO = TicketDTOdatasource.getTicketDTO();

    public static final EventDTO getEventDTO() {
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
}
