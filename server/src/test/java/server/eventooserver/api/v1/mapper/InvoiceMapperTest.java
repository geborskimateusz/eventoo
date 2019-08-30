package server.eventooserver.api.v1.mapper;

import org.junit.jupiter.api.Test;
import server.eventooserver.api.v1.dto.InvoiceDTO;
import server.eventooserver.domain.Invoice;
import server.eventooserver.helpers.Comparator;
import server.eventooserver.helpers.bootstrap.InvoiceDatasource;

import static org.junit.jupiter.api.Assertions.*;

class InvoiceMapperTest {

    InvoiceMapper invoiceMapper = InvoiceMapper.INSTANCE;

    @Test
    void invoiceDTOtoInvoice() {

        InvoiceDTO invoiceDTO = InvoiceDatasource.getInvoiceDTO();
        Invoice invoice = invoiceMapper.invoiceDTOtoInvoice(invoiceDTO);


        assertAll(() -> {
            assertEquals(invoiceDTO.getUserDetailsId(), invoice.getUserDetails().getId());
            assertEquals(invoiceDTO.getOrderDate(), invoice.getOrderDate());
            assertEquals(invoiceDTO.getOrderedTickets().size(), invoice.getOrderedTickets().size());
        });
    }
}