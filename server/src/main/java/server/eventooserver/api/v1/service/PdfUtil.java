package server.eventooserver.api.v1.service;

import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.pdf.PdfPTable;
import server.eventooserver.api.v1.dto.InvoiceDTO;
import server.eventooserver.api.v1.dto.OrderedTicketDTO;
import server.eventooserver.domain.Invoice;
import server.eventooserver.domain.OrderedTicket;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Set;

public interface PdfUtil {

    void renderParagraphs(Document document, Integer number) throws DocumentException;
    void renderLogo(Document document) throws URISyntaxException, IOException, DocumentException;
    void addHeadersRow(PdfPTable table);
    void renderDetailsRows(PdfPTable table, Invoice invoice) throws DocumentException;
    void orderTickets(Document document, Set<OrderedTicket> orderedTickets) throws DocumentException;
}
