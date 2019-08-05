package server.eventooserver.api.v1.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import server.eventooserver.domain.Location;
import server.eventooserver.domain.MusicGenre;
import server.eventooserver.domain.Ticket;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
public class EventDTO {
    private String title;
    private String description;
    private LocalDate date;
    private String img;
    private MusicGenre genre;
    private Location locations;
    Set<Ticket> tickets = new HashSet<>();

}
