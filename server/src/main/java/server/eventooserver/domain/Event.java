package server.eventooserver.domain;


import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
//@AllArgsConstructor
@Entity(name = "Event")
@Table(name = "event")
public class Event extends BaseEntity {

    private String title;

    @Column(columnDefinition = "LONGTEXT")
    private String description;
    private LocalDate date;
    private String img;

    @Enumerated(EnumType.STRING)
    private MusicGenre genre;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "location_id")
    Location location;

    @OneToMany(
            cascade = CascadeType.ALL,
            mappedBy = "event")
    Set<Ticket> tickets = new HashSet<>();

    public void addTicket(Ticket ticket) {
        this.tickets.add(ticket);
        ticket.setEvent(this);
    }

    @Override
    public String toString() {
        return "Event{" +
                "title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", date=" + date +
                ", img='" + img + '\'' +
                ", genre=" + genre +
                ", location=" + location +
                ", tickets=" + tickets +
                '}';
    }
}
