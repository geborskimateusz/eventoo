package server.eventooserver.api.v1.dto;

import lombok.*;
import org.mapstruct.AfterMapping;
import server.eventooserver.api.v1.dto.EventDTO;
import server.eventooserver.domain.TicketType;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
public class OrderedTicketDTO extends TicketDTO {
    private Integer amount;

    @Builder
    public OrderedTicketDTO(TicketType type, Integer price, Integer totalAmmount, Integer inStock, EventDTO event, Integer amount) {
        super(type, price, totalAmmount, inStock, event);
        this.amount = amount;
    }



    @Override
    public String toString() {
        return "OrderedTicketDTO{" +
                "amount=" + amount +
                "ticket" + super.toString() +
                '}';
    }
}
