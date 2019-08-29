package server.eventooserver.helpers.bootstrap;

import server.eventooserver.api.v1.dto.InvoiceDTO;
import server.eventooserver.api.v1.dto.OrderedTicketDTO;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;

public class InvoiceDTOdatasource {

    public static final long USER_DETAILS_ID = 1L;
    public static final LocalDate LOCAL_DATE = LocalDate.now();
    public static final OrderedTicketDTO ORDERED_TICKET_DTO = OrderedTicketDTOdatasource.getOrderedTicketDTO();

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
