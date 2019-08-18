package server.eventooserver.api.v1.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import server.eventooserver.api.v1.dto.InvoiceDTO;
import server.eventooserver.api.v1.mapper.InvoiceMapper;
import server.eventooserver.api.v1.service.AwsS3service;
import server.eventooserver.api.v1.service.OrderService;

import java.io.ByteArrayOutputStream;

@Slf4j
@CrossOrigin(value = "${cors.origin.value}")
@RestController
@RequestMapping(OrderController.API_VI_ORDER)
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    public static final String API_VI_ORDER = "api/v1/order";

    //TODO pdf name should be returned
    @PatchMapping
    @ResponseStatus(HttpStatus.OK)
    public String bookTickets(@RequestBody InvoiceDTO invoiceDTO) {

        return orderService.orderTickets(invoiceDTO);
    }


    @GetMapping("{fileName}")
    public ResponseEntity<byte[]> downloadInvoice(@PathVariable String fileName) {
        System.out.println(fileName);
        ByteArrayOutputStream downloadInputStream = orderService.downloadInvoice(fileName);

        return ResponseEntity.ok()
                .contentType(contentType(fileName))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + fileName + "\"")
                .body(downloadInputStream.toByteArray());
    }

    private MediaType contentType(String keyname) {
        String[] arr = keyname.split("\\.");
        String type = arr[arr.length - 1];
        switch (type) {
            case "pdf":
                return MediaType.APPLICATION_PDF;
            case "txt":
                return MediaType.TEXT_PLAIN;
            case "png":
                return MediaType.IMAGE_PNG;
            case "jpg":
                return MediaType.IMAGE_JPEG;
            default:
                return MediaType.APPLICATION_OCTET_STREAM;
        }
    }


}
