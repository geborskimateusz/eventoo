package server.eventooserver.api.v1.service;

import com.amazonaws.services.dynamodbv2.xspec.S;
import com.itextpdf.text.*;

import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import com.itextpdf.text.pdf.draw.LineSeparator;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import server.eventooserver.api.v1.dto.UserDetailsDTO;
import server.eventooserver.domain.Invoice;
import server.eventooserver.domain.UserDetails;

import java.io.*;
import java.net.URISyntaxException;


import static server.eventooserver.api.v1.service.util.SharedConstans.DOT;
import static server.eventooserver.api.v1.service.util.SharedConstans.PDF_EXTENSION;
import static server.eventooserver.api.v1.service.util.SharedConstans.UNDERSCORE;

@Slf4j
@Service
public class FilesUtilServiceImpl implements FilesUtilService {


    @Qualifier("orderPdfUtilImpl")
    private final PdfUtil pdfUtil;

    private final AwsS3service awsS3service;

    public FilesUtilServiceImpl(PdfUtil pdfUtil, AwsS3service awsS3service) {
        this.pdfUtil = pdfUtil;
        this.awsS3service = awsS3service;
    }

    @Override
    public String generateConfirmationOrder(Invoice invoice) {

        UserDetails userDetails = invoice.getUserDetails();
        String pdfName = userDetails.getEmail() + UNDERSCORE + invoice.getId() + UNDERSCORE + invoice.getOrderDate() + PDF_EXTENSION;


        Document document = new Document();
        ByteArrayOutputStream out = new ByteArrayOutputStream();


        try {
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

        } catch (DocumentException
                | URISyntaxException
                | IOException e) {

            log.error(e.getMessage());

        } finally {

            document.close();

            InputStream inputStream = new ByteArrayInputStream(out.toByteArray());

            awsS3service.uploadFile(inputStream, pdfName);
        }

        return pdfName;

    }

}
