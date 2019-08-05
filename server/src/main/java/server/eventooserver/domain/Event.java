package server.eventooserver.domain;


import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@Entity(name = "Event")
@Table(name = "event")
public class Event extends BaseEntity {

    private String title;
    private String description;
    private LocalDate date;
    private String img;

    @Enumerated(EnumType.STRING)
    private MusicGenre genre;

    @ManyToMany
    @JoinTable(name="event_location",
            joinColumns = {@JoinColumn(name = "event_id")},
            inverseJoinColumns = {@JoinColumn(name = "location_id")})
    Set<Location> locations = new HashSet<>();

    @ManyToMany
    @JoinTable(name="event_ticket",
            joinColumns = {@JoinColumn(name = "event_id")},
            inverseJoinColumns = {@JoinColumn(name = "ticket_id")})
    Set<Ticket> tickets = new HashSet<>();

    @Builder
    public Event(String title, String description, LocalDate date, String img, MusicGenre genre, Set<Location> locations, Set<Ticket> tickets) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.img = img;
        this.genre = genre;
        this.locations = locations;
        this.tickets = tickets;
    }

    public void addTicket(Ticket ticket) {
        this.tickets.add(ticket);
        ticket.getEvents().add(this);
    }
}
