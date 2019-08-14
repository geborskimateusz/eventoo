package server.eventooserver.api.v1.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import server.eventooserver.domain.Event;
import server.eventooserver.domain.TicketType;

import java.util.HashSet;
import java.util.Set;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties({"event"})
public class TicketDTO extends BaseEntityDTO {

    private TicketType type;
    private Integer price;
    private Integer totalAmmount;
    private Integer inStock;
    private EventDTO event;

    @Override
    public String toString() {
        return "TicketDTO{" +
                "type=" + type +
                ", price=" + price +
                ", totalAmmount=" + totalAmmount +
                ", inStock=" + inStock +
                '}';
    }
}
