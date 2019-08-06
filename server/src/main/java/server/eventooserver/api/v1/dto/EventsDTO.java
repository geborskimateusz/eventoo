package server.eventooserver.api.v1.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class EventsDTO {
    List<EventDTO> events = new ArrayList<>();

    @Builder
    public EventsDTO(List<EventDTO> events) {
        this.events = events;
    }
}
