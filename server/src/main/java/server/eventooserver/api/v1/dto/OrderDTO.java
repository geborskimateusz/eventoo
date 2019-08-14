package server.eventooserver.api.v1.dto;

import lombok.*;

import java.time.LocalDate;
import java.util.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OrderDTO {

    private LocalDate orderDate;
    private List<OrderedTicketDTO> orderedTickets = new ArrayList<>();
    private UserDetailsDTO userDetailsDTO;


    @Override
    public String toString() {
        return "OrderDTO{" +
                "orderDate=" + orderDate +
                ", orderedTickets=" + orderedTickets +
                '}';
    }
}
