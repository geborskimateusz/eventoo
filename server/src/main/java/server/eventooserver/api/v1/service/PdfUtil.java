//package server.eventooserver.api.v1.service;
//
//import com.itextpdf.text.Document;
//import com.itextpdf.text.DocumentException;
//import com.itextpdf.text.pdf.PdfPTable;
//import server.eventooserver.api.v1.dto.InvoiceDTO;
//import server.eventooserver.api.v1.dto.OrderedTicketDTO;
//
//import java.io.IOException;
//import java.net.URISyntaxException;
//import java.util.List;
//
//public interface PdfUtil {
//
//    void renderParagraphs(Document document, Integer number) throws DocumentException;
//    void renderLogo(Document document) throws URISyntaxException, IOException, DocumentException;
//    void addHeadersRow(PdfPTable table);
//    void renderDetailsRows(PdfPTable table, InvoiceDTO orderDTO) throws DocumentException;
//    void orderTickets(Document document, List<OrderedTicketDTO> orderedTickets) throws DocumentException;
//}
