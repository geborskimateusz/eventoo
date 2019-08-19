package server.eventooserver.api.v1.service;

import org.springframework.http.MediaType;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.activation.DataSource;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.mail.util.ByteArrayDataSource;
import java.io.ByteArrayOutputStream;

@Service
public class MailServiceImpl implements MailService {

    private final UserService userService;
    private final AwsS3serviceImpl awsS3service;
    private final JavaMailSender sender;

    public MailServiceImpl(UserService userService, AwsS3serviceImpl awsS3service, JavaMailSender sender) {
        this.userService = userService;
        this.awsS3service = awsS3service;
        this.sender = sender;
    }

    @Override
    public void sendInvoice(Long userId, String fileName) {

        String email = userService.findById(userId).getEmail();

        ByteArrayOutputStream baos = awsS3service.downloadFile(fileName);

        DataSource aAttachment = new ByteArrayDataSource(baos.toByteArray(), MediaType.APPLICATION_OCTET_STREAM.toString());

        try {
            MimeMessage message = sender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            helper.setTo("eventoo.services@gmail.com");
            helper.setText("How are you?");
            helper.setSubject("Hi attachment");
            helper.addAttachment("some file", aAttachment);

            sender.send(message);
        } catch (MessagingException e) {
            System.out.println(e.getMessage());
        }

    }
}
