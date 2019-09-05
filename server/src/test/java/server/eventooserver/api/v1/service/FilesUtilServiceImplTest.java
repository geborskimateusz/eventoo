package server.eventooserver.api.v1.service;

import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import server.eventooserver.domain.Invoice;
import server.eventooserver.helpers.bootstrap.InvoiceDatasource;

import java.io.IOException;
import java.net.URISyntaxException;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.when;
import static server.eventooserver.api.v1.service.util.SharedConstans.PDF_EXTENSION;
import static server.eventooserver.api.v1.service.util.SharedConstans.UNDERSCORE;

class FilesUtilServiceImplTest {


    public static final long ID = 1L;
    @Mock
    PdfUtil pdfUtil;

    @Mock
    AwsS3service awsS3service;

    FilesUtilService filesUtilService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
        filesUtilService = new FilesUtilServiceImpl(pdfUtil, awsS3service);
    }

    @Test
    void generateConfirmationOrder() {

        Invoice invoice = InvoiceDatasource.getInvoice();
        invoice.setId(ID);

        String expected =  invoice.getUserDetails().getEmail() + UNDERSCORE + invoice.getId() + UNDERSCORE + invoice.getOrderDate() + PDF_EXTENSION;

        String fileName = filesUtilService.generateConfirmationOrder(invoice);

        assertEquals(expected, fileName);


    }
}