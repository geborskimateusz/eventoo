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

class FilesUtilServiceImplTest {

    public static final String FILE_NAME = "fakeemail@gmail.com_null_2019-08-30.pdf";
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
    void generateConfirmationOrder()  {

        Invoice invoice = InvoiceDatasource.getInvoice();

        String fileName = filesUtilService.generateConfirmationOrder(invoice);

        assertEquals(FILE_NAME, fileName);


    }
}