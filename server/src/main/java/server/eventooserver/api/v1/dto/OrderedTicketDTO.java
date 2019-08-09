package server.eventooserver.api.v1.dto;

import lombok.*;
import server.eventooserver.api.v1.dto.EventDTO;
import server.eventooserver.domain.TicketType;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderedTicketDTO extends TicketDTO {
    private Integer amount;

    @Override
    public String toString() {
        return "OrderedTicketDTO{" +
                "amount=" + amount +
                "ticket" + super.toString() +
                '}';
    }
}
