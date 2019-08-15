package server.eventooserver.domain;

import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity(name = "Ticket")
@Table(name = "ticket")
public class Ticket extends BaseEntity {

    @Enumerated(value = EnumType.STRING)
    private TicketType type;
    private Integer price;
    private Integer totalAmmount;
    private Integer inStock;

    @ManyToOne(cascade = {
            CascadeType.DETACH,
            CascadeType.MERGE,
            CascadeType.PERSIST,
            CascadeType.REFRESH
    })
    @JoinColumn(name = "event_id")
    Event event;


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
