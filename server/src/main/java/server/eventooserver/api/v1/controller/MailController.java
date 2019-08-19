package server.eventooserver.api.v1.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import server.eventooserver.api.v1.service.MailService;

@Slf4j
@CrossOrigin(value = "${cors.origin.value}")
@RestController
@RequestMapping(MailController.API_V1_MESSAGES)
public class MailController {

    public static final String API_V1_MESSAGES = "api/v1/messages";

    private final MailService mailService;

    public MailController(MailService mailService) {
        this.mailService = mailService;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public void sendConfirmationOrder(@RequestParam(value = "invoice") String invoiceName ){
        this.mailService.sendInvoice(invoiceName);
    }
}
