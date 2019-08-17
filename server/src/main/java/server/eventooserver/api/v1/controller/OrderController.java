package server.eventooserver.api.v1.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import server.eventooserver.api.v1.dto.InvoiceDTO;
import server.eventooserver.api.v1.mapper.InvoiceMapper;
import server.eventooserver.api.v1.service.OrderService;

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
    public void bookTickets(@RequestBody InvoiceDTO invoiceDTO) throws Exception {

//        orderService.orderTickets(invoiceDTO);
        throw new Exception("");
    }

}
