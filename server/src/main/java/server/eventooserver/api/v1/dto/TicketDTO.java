package server.eventooserver.api.v1.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import server.eventooserver.domain.Event;
import server.eventooserver.domain.TicketType;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties({"events"})
public class TicketDTO {

    private TicketType type;
    private Integer price;
    private Integer totalAmmount;
    private Integer inStock;
//    Set<EventDTO> events = new HashSet<>();
    private EventDTO event;

    @Builder
    public TicketDTO(TicketType type, Integer price, Integer totalAmmount, Integer inStock, EventDTO event) {
        this.type = type;
        this.price = price;
        this.totalAmmount = totalAmmount;
        this.inStock = inStock;
        this.event = event;
    }


    @Override
    public String toString() {
        return "TicketDTO{" +
                "type='" + type + '\'' +
                ", price=" + price +
                ", totalAmmount=" + totalAmmount +
                ", inStock=" + inStock +
                '}';
    }
}
