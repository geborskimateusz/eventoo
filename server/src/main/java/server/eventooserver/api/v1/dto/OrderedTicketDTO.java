package server.eventooserver.api.v1.dto;

import lombok.*;
import org.mapstruct.AfterMapping;
import server.eventooserver.api.v1.dto.EventDTO;
import server.eventooserver.domain.TicketType;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
public class OrderedTicketDTO extends BaseEntityDTO {
    private Integer amount;
    private TicketDTO ticket;

    @Builder
    public OrderedTicketDTO(Integer amount, TicketDTO ticket) {
        this.amount = amount;
        this.ticket = ticket;
    }

    @Override
    public String toString() {
        return "OrderedTicketDTO{" +
                "amount=" + amount +
                ", ticket=" + ticket +
                '}';
    }
}
