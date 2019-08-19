package server.eventooserver.api.v1.service;

public interface MailService {

    void sendInvoice(Long userId, String fileName);
}
