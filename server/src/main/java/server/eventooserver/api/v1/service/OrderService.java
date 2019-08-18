package server.eventooserver.api.v1.service;

import server.eventooserver.api.v1.dto.InvoiceDTO;

import java.io.ByteArrayOutputStream;

public interface OrderService {

    String orderTickets(InvoiceDTO orderedTicketsDTO);
    ByteArrayOutputStream downloadInvoice(String fileName);
}
