package server.eventooserver.domain;

import lombok.*;
import server.eventooserver.api.v1.dto.OrderedTicketDTO;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@Entity(name = "Invoice")
@Table(name = "invoice")
public class Invoice extends BaseEntity {

    private LocalDate orderDate;

    @OneToMany(cascade = {
            CascadeType.DETACH,
            CascadeType.MERGE,
            CascadeType.PERSIST,
            CascadeType.REFRESH
    },
            mappedBy = "invoice")
    private Set<OrderedTicket> orderedTickets = new HashSet<>();

    @ManyToOne
    @JoinColumn(name="user_details_id")
    private UserDetails userDetails;

    @Builder
    public Invoice(LocalDate orderDate, Set<OrderedTicket> orderedTickets) {
        this.orderDate = orderDate;
        this.orderedTickets = orderedTickets;
    }

    public void addOrderedTicket(OrderedTicket ticket) {
        this.orderedTickets.add(ticket);
        ticket.setInvoice(this);
    }

    @Override
    public String toString() {
        return "Invoice{" +
                "orderDate=" + orderDate +
                ", orderedTickets=" + orderedTickets +
                '}';
    }
}
