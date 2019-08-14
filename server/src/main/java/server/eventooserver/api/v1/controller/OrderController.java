package server.eventooserver.api.v1.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import server.eventooserver.api.v1.dto.OrderDTO;
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


    //TODO pdf should be returned
    @PatchMapping
    @ResponseStatus(HttpStatus.OK)
    public void bookTickets(@RequestBody OrderDTO orderedTicketsDTO) {
        orderService.orderTickets(orderedTicketsDTO);
    }
}
