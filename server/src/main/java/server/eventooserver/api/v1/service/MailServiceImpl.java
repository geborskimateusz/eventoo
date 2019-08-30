package server.eventooserver.api.v1.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import javax.activation.DataSource;
import javax.mail.util.ByteArrayDataSource;
import java.io.ByteArrayOutputStream;

import static server.eventooserver.api.v1.service.util.SharedConstans.S3_INVOICE_DIR;
import static server.eventooserver.api.v1.service.util.SharedConstans.UNDERSCORE;

@Slf4j
@Service
public class MailServiceImpl extends AbstractMailService implements MailService {

    private final AwsS3serviceImpl awsS3service;

    public MailServiceImpl(JavaMailSender sender, AwsS3serviceImpl awsS3service) {
        super(sender);
        this.awsS3service = awsS3service;
    }

    @Override
    public void sendInvoice(String fileName) {

        String email = extractEmail(fileName);

        ByteArrayOutputStream baos = awsS3service.getFile(S3_INVOICE_DIR + fileName);

        DataSource attachment = new ByteArrayDataSource(baos.toByteArray(), MediaType.APPLICATION_OCTET_STREAM.toString());

        sendEmail(email, attachment, fileName);

    }

    @Override
    public void contactRequest(String email, String fullName) {
        sendEmail(email, fullName);
    }

    private String extractEmail(String fileName) {
        return fileName.split(UNDERSCORE)[0];
    }

}
