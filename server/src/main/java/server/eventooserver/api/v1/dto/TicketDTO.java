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

    //@Builder
//    public TicketDTO(TicketType type, Integer price, Integer totalAmmount, Integer inStock, EventDTO event) {
//        this.type = type;
//        this.price = price;
//        this.totalAmmount = totalAmmount;
//        this.inStock = inStock;
//        this.event = event;
//    }

    @Builder
    public TicketDTO(Long id, TicketType type, Integer price, Integer totalAmmount, Integer inStock, EventDTO event) {
        super(id);
        this.type = type;
        this.price = price;
        this.totalAmmount = totalAmmount;
        this.inStock = inStock;
        this.event = event;
    }



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
