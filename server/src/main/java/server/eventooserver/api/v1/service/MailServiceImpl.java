package server.eventooserver.api.v1.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.activation.DataSource;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.mail.util.ByteArrayDataSource;
import java.io.ByteArrayOutputStream;

import static server.eventooserver.api.v1.service.util.MessageConstans.CONFIRMATION_ORDER_SUBJECT;
import static server.eventooserver.api.v1.service.util.MessageConstans.CONFIRMATION_ORDER_TEXT;
import static server.eventooserver.api.v1.service.util.MessageConstans.ORDER_CONFIRMATION_PREFIX;
import static server.eventooserver.api.v1.service.util.SharedConstans.S3_INVOICE_DIR;
import static server.eventooserver.api.v1.service.util.SharedConstans.UNDERSCORE;

@Slf4j
@Service
public class MailServiceImpl implements MailService {

    private final AwsS3serviceImpl awsS3service;
    private final JavaMailSender sender;

    public MailServiceImpl(AwsS3serviceImpl awsS3service, JavaMailSender sender) {
        this.awsS3service = awsS3service;
        this.sender = sender;
    }

    @Override
    public void sendInvoice(String fileName) {

        String email = extractEmail(fileName);

        ByteArrayOutputStream baos = awsS3service.getFile(S3_INVOICE_DIR + fileName);

        DataSource attachment = new ByteArrayDataSource(baos.toByteArray(), MediaType.APPLICATION_OCTET_STREAM.toString());

        try {
            MimeMessage message = sender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            helper.setTo(email);
            helper.setText(CONFIRMATION_ORDER_TEXT);
            helper.setSubject(CONFIRMATION_ORDER_SUBJECT);
            helper.addAttachment(getAttachmentFilename(fileName), attachment);

            sender.send(message);

        } catch (MessagingException e) {
            System.out.println(e.getMessage());
        } finally {
            log.info("Message was sent successfully to " + email);
        }

    }

    private String extractEmail(String fileName) {
        return fileName.split(UNDERSCORE)[0];
    }

    private String getAttachmentFilename(String fileName) {
        return ORDER_CONFIRMATION_PREFIX + fileName;
    }
}
