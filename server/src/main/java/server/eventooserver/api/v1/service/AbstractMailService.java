package server.eventooserver.api.v1.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;

import javax.activation.DataSource;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import static server.eventooserver.api.v1.service.util.MessageTemplates.*;

@Slf4j
public abstract class AbstractMailService {

    private final JavaMailSender sender;

    public AbstractMailService(JavaMailSender sender) {
        this.sender = sender;
    }

    public void sendEmail(String email, DataSource attachment, String fileName) {
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

    public void sendEmail(String email, String fullName) {
        try {
            MimeMessage message = sender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, false);

            String text = getPersonalizeContactRequest(fullName);

            helper.setTo(email);
            helper.setText(text);
            helper.setSubject(CONTACT_REQUEST_SUBJECT);

            sender.send(message);

        } catch (MessagingException e) {
            System.out.println(e.getMessage());
        } finally {
            log.info("Message was sent successfully to " + email);
        }
    }

    private String getAttachmentFilename(String fileName) {
        return ORDER_CONFIRMATION_PREFIX + fileName;
    }

}
