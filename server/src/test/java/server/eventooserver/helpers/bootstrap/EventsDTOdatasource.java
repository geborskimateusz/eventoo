package server.eventooserver.helpers.bootstrap;

import server.eventooserver.api.v1.dto.EventDTO;
import server.eventooserver.api.v1.dto.EventsDTO;

import java.util.Arrays;

public class EventsDTOdatasource {

    public static final EventDTO EVENT_DTO = EventDTOdatasource.getEventDTO();

    public static  final EventsDTO getEventsDTO() {
        return  EventsDTO.builder()
                .events(
                        Arrays.asList(
                                EVENT_DTO,
                                EVENT_DTO,
                                EVENT_DTO
                        )
                )
                .build();
    }
}
