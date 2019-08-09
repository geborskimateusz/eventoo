package server.eventooserver.api.v1.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import server.eventooserver.api.v1.dto.EventDTO;

import java.time.LocalDate;

@Getter
@Setter
@Builder
public class OrderedTicketDTO {
    private Integer ammount;
    private TicketDTO ticket;
}
