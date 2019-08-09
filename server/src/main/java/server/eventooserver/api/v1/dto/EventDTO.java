package server.eventooserver.api.v1.dto;

import lombok.Builder;
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
    private LocationDTO location;
    Set<TicketDTO> tickets = new HashSet<>();

    @Builder
    public EventDTO(String title, String description, LocalDate date, String img, MusicGenre genre, LocationDTO location, Set<TicketDTO> tickets) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.img = img;
        this.genre = genre;
        this.location = location;
        this.tickets = tickets;
    }

    @Override
    public String toString() {
        return "EventDTO{" +
                "title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", date=" + date +
                ", img='" + img + '\'' +
                ", genre='" + genre + '\'' +
                ", location=" + location +
                ", tickets=" + tickets +
                '}';
    }
}
