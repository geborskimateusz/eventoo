package server.eventooserver.helpers.bootstrap;

import server.eventooserver.api.v1.dto.InvoiceDTO;
import server.eventooserver.api.v1.dto.OrderedTicketDTO;
import server.eventooserver.domain.Invoice;
import server.eventooserver.domain.OrderedTicket;

import java.time.LocalDate;
import java.util.Collections;
import java.util.HashSet;

public class InvoiceDatasource {

    public static final long USER_DETAILS_ID = 1L;
    public static final LocalDate LOCAL_DATE = LocalDate.now();
    public static final OrderedTicketDTO ORDERED_TICKET_DTO = OrderedTicketDatasource.getOrderedTicketDTO();
    public static final OrderedTicket ORDERED_TICKET = OrderedTicketDatasource.getOrderedTicket();

    public static Invoice getInvoice() {
        return Invoice.builder()
                .userDetails(UserDetailsDatasource.getUserDetails())
                .orderDate(LOCAL_DATE)
                .orderedTickets(
                       new HashSet<>(
                               Collections.singletonList(
                                       ORDERED_TICKET
                               )
                       )
                )
                .build();
    }

    public static InvoiceDTO getInvoiceDTO() {
        return InvoiceDTO.builder()
                .userDetailsId(USER_DETAILS_ID)
                .orderDate(LOCAL_DATE)
                .orderedTickets(
                        new HashSet<>(
                                Collections.singletonList(
                                        ORDERED_TICKET_DTO
                                )
                        )
                )
                .build();
    }
}
