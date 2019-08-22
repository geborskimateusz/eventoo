package server.eventooserver.api.v1.dto;

import lombok.*;
import server.eventooserver.domain.Location;
import server.eventooserver.domain.MusicGenre;
import server.eventooserver.domain.Ticket;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EventDTO extends BaseEntityDTO{
    private String title;
    private String description;
    private LocalDate date;
    private String img;
    private MusicGenre genre;
    private LocationDTO location;
    Set<TicketDTO> tickets = new HashSet<>();

    @Override
    public String toString() {
        return "EventDTO{" +
                "title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", date=" + date +
                ", img='" + img + '\'' +
                ", genre=" + genre +
//                ", location=" + location +
//                ", tickets=" + tickets +
                '}';
    }
}
