package server.eventooserver.domain;

import lombok.*;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlAccessorOrder;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@Entity(name = "Ticket")
@Table(name = "ticket")
public class Ticket extends BaseEntity {

    @Enumerated(value = EnumType.STRING)
    private TicketType type;
    private Integer price;
    private Integer totalAmmount;
    private Integer inStock;

    @ManyToOne(
            cascade = {
                    CascadeType.DETACH,
                    CascadeType.MERGE,
                    CascadeType.PERSIST,
                    CascadeType.REFRESH
            }
    )
    @JoinColumn(name = "event_id")
    Event event;

    @Builder
    public Ticket(TicketType type, Integer price, Integer totalAmmount, Integer inStock, Event event) {
        this.type = type;
        this.price = price;
        this.totalAmmount = totalAmmount;
        this.inStock = inStock;
        this.event = event;
    }

    @Override
    public String toString() {
        return "Ticket{" +
                "type=" + type +
                ", price=" + price +
                ", totalAmmount=" + totalAmmount +
                ", inStock=" + inStock +
                ", event=" + event +
                '}';
    }
}
