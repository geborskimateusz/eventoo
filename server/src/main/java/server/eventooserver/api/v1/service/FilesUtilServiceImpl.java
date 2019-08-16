package server.eventooserver.api.v1.service;

import com.itextpdf.text.*;

import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import com.itextpdf.text.pdf.draw.LineSeparator;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import server.eventooserver.api.v1.dto.UserDetailsDTO;
import server.eventooserver.domain.Invoice;
import server.eventooserver.domain.UserDetails;

import java.io.ByteArrayOutputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.ByteArrayInputStream;


import static server.eventooserver.api.v1.service.util.OrderConstans.PDF_EXTENSION;
import static server.eventooserver.api.v1.service.util.SharedConstans.UNDERSCORE;

@Service
public class FilesUtilServiceImpl implements FilesUtilService {


    @Qualifier("orderPdfUtilImpl")
    private final PdfUtil pdfUtil;

    private final AwsS3service awsS3service;

    public FilesUtilServiceImpl(PdfUtil pdfUtil, AwsS3service awsS3service) {
        this.pdfUtil = pdfUtil;
        this.awsS3service = awsS3service;
    }

    //TODO THIS METHOD SHOULD UPLOAD FILE TO AWS S3, FOR TESTING IT UPLOADS FILE TO src/main/resources/static/pdf/
    //TODO THIS METHOD SHOULD RETURN PDF ID ETC. FOR CLIENT REQUEST
    @Override
    public void generateOrderConfirmation(Invoice invoice) {

        UserDetails userDetails = invoice.getUserDetails();

        Document document = new Document();
        ByteArrayOutputStream out = new ByteArrayOutputStream();

        String pdfName = userDetails.getEmail() + UNDERSCORE + invoice.getId() + UNDERSCORE + invoice.getOrderDate();


        try {
//           PdfWriter.getInstance(document, new FileOutputStream("src/main/resources/static/pdf/" + pdfName + PDF_EXTENSION));
            PdfWriter.getInstance(document, out);


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

            pdfUtil.renderOrder(document, invoice.getOrderedTickets());
        } catch (Exception e) {
            System.out.println(e.getMessage());
        } finally {
            document.close();

            InputStream inputStream = new ByteArrayInputStream(out.toByteArray());

            awsS3service.uploadFile(inputStream, pdfName);

        }


    }

}
