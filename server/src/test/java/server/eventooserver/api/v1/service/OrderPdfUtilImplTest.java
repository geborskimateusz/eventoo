package server.eventooserver.api.v1.service;

import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfTemplate;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import server.eventooserver.domain.Invoice;
import server.eventooserver.domain.OrderedTicket;
import server.eventooserver.helpers.bootstrap.EventDatasource;
import server.eventooserver.helpers.bootstrap.EventsDTOdatasource;
import server.eventooserver.helpers.bootstrap.OrderedTicketDatasource;


import javax.print.Doc;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static server.eventooserver.api.v1.service.util.SharedConstans.NEW_LINE;

class OrderPdfUtilImplTest {


    public static final String FAKE_PATH = "fake path";
    PdfUtil pdfUtil;

    public OrderPdfUtilImplTest() {
        MockitoAnnotations.initMocks(this);
        pdfUtil = new OrderPdfUtilImpl();
    }

    @Test
    void renderParagraphs() throws DocumentException {

        Document document = spy(new Document());

        int numberOfInvocation = 5;

        document.open();

        pdfUtil.renderParagraphs(document, numberOfInvocation);

        verify(document, times(numberOfInvocation)).add(any(Paragraph.class));

        document.close();

    }

    @Test
    void renderLogo() throws DocumentException, IOException, URISyntaxException {

        Document document = spy(new Document());

        document.open();

        pdfUtil.renderLogo(document);

        verify(document, times(2)).add(any(Element.class));

        document.close();


    }

    @Test
    void addHeadersRow() {

        PdfPTable pdfPTable = spy(new PdfPTable(3));

        pdfUtil.addHeadersRow(pdfPTable);

        verify(pdfPTable, times(3)).addCell(any(PdfPCell.class));

    }

    @Test
    void renderOrder() throws DocumentException {
        Set<OrderedTicket> orderedTickets = OrderedTicketDatasource.getOrderedTickets();
        orderedTickets.forEach(orderedTicket -> orderedTicket.getTicket().setEvent(EventDatasource.getEvent()));

        Document document = spy(new Document());

        document.open();

        pdfUtil.renderOrder(document,orderedTickets);

        verify(document, times(4)).add(any(Chunk.class));

        document.close();

    }
}