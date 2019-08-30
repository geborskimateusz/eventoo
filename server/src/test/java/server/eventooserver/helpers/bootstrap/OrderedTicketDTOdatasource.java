package server.eventooserver.helpers.bootstrap;

import server.eventooserver.api.v1.dto.OrderedTicketDTO;
import server.eventooserver.api.v1.dto.TicketDTO;

public class OrderedTicketDTOdatasource {

    public static final TicketDTO TICKET_DTO = TicketDatasource.getTicketDTO();
    public static final int AMOUNT = 5;

    public static OrderedTicketDTO getOrderedTicketDTO() {
        return OrderedTicketDTO.builder()
                .ticket(TICKET_DTO)
                .amount(AMOUNT)
                .build();
    }
}
