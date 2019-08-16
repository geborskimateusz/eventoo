package server.eventooserver.api.v1.dto;

import lombok.*;
import server.eventooserver.domain.UserDetails;

import java.time.LocalDate;
import java.util.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class InvoiceDTO {

    private LocalDate orderDate;
    private Set<OrderedTicketDTO> orderedTickets = new HashSet<>();
    private Long userDetailsId;

    @Override
    public String toString() {
        return "InvoiceDTO{" +
                "orderDate=" + orderDate +
                ", orderedTickets=" + orderedTickets +
                ", userId=" + userDetailsId +
                '}';
    }
}
