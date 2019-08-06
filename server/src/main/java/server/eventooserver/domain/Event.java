package server.eventooserver.domain;


import lombok.*;

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

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "location_id")
    Location location;

    @ManyToMany(cascade = {
            CascadeType.DETACH,
            CascadeType.MERGE,
            CascadeType.PERSIST,
            CascadeType.REFRESH
    })
    @JoinTable(name = "event_ticket",
            joinColumns = {@JoinColumn(name = "event_id")},
            inverseJoinColumns = {@JoinColumn(name = "ticket_id")})
    Set<Ticket> tickets = new HashSet<>();

    @Builder
    public Event(String title, String description, LocalDate date, String img, MusicGenre genre, Location location, Set<Ticket> tickets) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.img = img;
        this.genre = genre;
        this.location = location;
        this.tickets = tickets;
    }

    public void addTicket(Ticket ticket) {
        this.tickets.add(ticket);
        ticket.getEvents().add(this);
    }
}
