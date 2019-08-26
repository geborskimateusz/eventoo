package server.eventooserver.api.v1.service;

public interface MailService {

    void sendInvoice(String fileName);

    void contactRequest(String email, String fullName);

}
