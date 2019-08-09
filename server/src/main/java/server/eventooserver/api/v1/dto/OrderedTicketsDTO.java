package server.eventooserver.api.v1.dto;

import lombok.*;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderedTicketsDTO {

    private Date orderDate;
    private Set<OrderedTicketDTO> orderedTickets = new HashSet<>();


    @Override
    public String toString() {
        return "OrderedTicketsDTO{" +
                "orderDate=" + orderDate +
                ", orderedTickets=" + orderedTickets +
                '}';
    }
}
