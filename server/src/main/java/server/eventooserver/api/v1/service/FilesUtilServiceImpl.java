package server.eventooserver.api.v1.service;

import com.itextpdf.text.*;

import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import com.itextpdf.text.pdf.draw.LineSeparator;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import server.eventooserver.api.v1.dto.InvoiceDTO;
import server.eventooserver.api.v1.dto.UserDetailsDTO;
import server.eventooserver.domain.Invoice;

import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URISyntaxException;

import static server.eventooserver.api.v1.service.util.OrderConstans.PDF_EXTENSION;
import static server.eventooserver.api.v1.service.util.OrderConstans.UNDERSCORE;

@Service
public class FilesUtilServiceImpl implements FilesUtilService {

    private final UserService userService;

    @Qualifier("orderPdfUtilImpl")
    private final PdfUtil pdfUtil;

    public FilesUtilServiceImpl(UserService userService, PdfUtil pdfUtil) {
        this.userService = userService;
        this.pdfUtil = pdfUtil;
    }

    //TODO THIS METHOD SHOULD UPLOAD FILE TO AWS S3, FOR TESTING IT UPLOADS FILE TO src/main/resources/static/pdf/
    @Override
    public void generateOrderConfirmation(Invoice invoice){

        UserDetailsDTO userDetailsDTO = userService.findDTOById(invoice.getUserDetails().getId());

        Document document = new Document();

       try {
           String pdfName = userDetailsDTO.getEmail() + UNDERSCORE + invoice.getOrderDate();
           PdfWriter.getInstance(document, new FileOutputStream("src/main/resources/static/pdf/" + pdfName + PDF_EXTENSION));

           document.open();

           pdfUtil.renderLogo(document);


           pdfUtil.renderParagraphs(document, 2);

           LineSeparator horizontalLine = new LineSeparator();
           document.add(new Chunk(horizontalLine));

           PdfPTable table = new PdfPTable(3);
           pdfUtil.addHeadersRow(table);
           pdfUtil.renderDetailsRows(table, invoice);

           document.add(table);

           document.add(new Chunk(horizontalLine));

           pdfUtil.orderTickets(document, invoice.getOrderedTickets());
       }catch (Exception e) {
           System.out.println(e.getMessage());
       }finally {
           document.close();
       }

    }

}
