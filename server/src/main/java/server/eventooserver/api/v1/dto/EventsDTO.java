package server.eventooserver.api.v1.dto;

import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EventsDTO {
    List<EventDTO> events = new ArrayList<>();

}
