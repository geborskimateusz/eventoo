package server.eventooserver.api.v1.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.mail.javamail.JavaMailSender;

import javax.activation.DataSource;
import javax.mail.Session;
import javax.mail.internet.MimeMessage;

import java.io.ByteArrayOutputStream;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
import static server.eventooserver.api.v1.service.util.SharedConstans.S3_INVOICE_DIR;

class MailServiceImplTest {

    public static final String FAKE_FILE_NAME = "fake file name";
    public static final String FAKE_EMAIL = "fake email";
    public static final String FAKE_NAME = "fake name";

    @Mock
    AwsS3serviceImpl awsS3service;

    @Mock
    JavaMailSender javaMailSender;

    @Mock
    AbstractMailService abstractMailService;

    MailService mailService;

    public MailServiceImplTest() {
        MockitoAnnotations.initMocks(this);
        mailService = new MailServiceImpl(javaMailSender, awsS3service);
    }

    @BeforeEach
    void setUp(){
        MimeMessage mimeMessage = new MimeMessage((Session) null);
        when(javaMailSender.createMimeMessage()).thenReturn(mimeMessage);
    }


    @Test
    void sendInvoice() {

        String fileName = FAKE_FILE_NAME;

        when(awsS3service.getFile(anyString())).thenReturn(new ByteArrayOutputStream());

        mailService.sendInvoice(fileName);

        verify(awsS3service, times(1)).getFile(S3_INVOICE_DIR + fileName);

    }

    @Test
    void contactRequest() {
        mailService.contactRequest(FAKE_EMAIL, FAKE_NAME);

        verifyZeroInteractions(abstractMailService);
    }
}