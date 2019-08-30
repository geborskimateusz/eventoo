package server.eventooserver.helpers.bootstrap;

import server.eventooserver.api.v1.dto.TicketDTO;
import server.eventooserver.domain.Ticket;
import server.eventooserver.domain.TicketType;

public class TicketDatasource {

    public static final TicketType TICKET_TYPE = TicketType.GENERAL_ADMISSION;
    public static final int IN_STOCK = 20;
    public static final int TOTAL_AMOUNT = 15;
    public static final int PRICE = 150;

    public static Ticket getTicket() {
        return Ticket.builder()
                .type(TICKET_TYPE)
                .inStock(IN_STOCK)
                .totalAmmount(TOTAL_AMOUNT)
                .price(PRICE)
                .build();
    }

    public static TicketDTO getTicketDTO() {
        return TicketDTO.builder()
                .type(TICKET_TYPE)
                .inStock(IN_STOCK)
                .totalAmmount(TOTAL_AMOUNT)
                .price(PRICE)
                .build();
    }
}
