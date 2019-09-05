package server.eventooserver.domain;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity(name = "OrderedTicket")
@Table(name = "ordered_ticket")
public class OrderedTicket extends BaseEntity {

    private Integer amount;

    @OneToOne
    @JoinColumn(name="ticket_id")
    private Ticket ticket;

    @ManyToOne
    @JoinColumn(name = "invoice_id")
    private Invoice invoice;

    @Builder
    public OrderedTicket(Integer amount, Ticket ticket, Invoice invoice) {
        this.amount = amount;
        this.ticket = ticket;
        this.invoice = invoice;
    }

    @Override
    public String toString() {
        return "OrderedTicket{" +
                "id " + getId() +
                " amount=" + amount +
                ", ticket=" + ticket +
                ", invoice=" + invoice +
                '}';
    }
}
