package server.eventooserver.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@Entity(name = "Ticket")
@Table(name = "ticket")
public class Ticket extends BaseEntity {

    @Enumerated(value = EnumType.STRING)
    private TicketType ticketType;
    private Integer price;
    private Integer totalAmmount;
    private Integer inStock;

    @ManyToMany
    @JoinTable(name="event_ticket",
            joinColumns = {@JoinColumn(name = "ticket_id")},
            inverseJoinColumns = {@JoinColumn(name = "event_id")})
    Set<Event> events = new HashSet<>();

    @Builder
    public Ticket(TicketType ticketType, Integer price, Integer toalAmmount, Integer inStock, Set<Event> events) {
        this.ticketType = ticketType;
        this.price = price;
        this.totalAmmount = toalAmmount;
        this.inStock = inStock;
        this.events = events;
    }
}
