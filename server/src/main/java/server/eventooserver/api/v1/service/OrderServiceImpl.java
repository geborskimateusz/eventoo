package server.eventooserver.api.v1.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import server.eventooserver.api.v1.dto.OrderDTO;
import server.eventooserver.api.v1.dto.OrderedTicketDTO;
import server.eventooserver.api.v1.dto.TicketDTO;

import javax.transaction.Transactional;

@Slf4j
@Service
public class OrderServiceImpl implements OrderService {

    private final TicketService ticketService;
    private final FilesUtilService filesUtilService;

    public OrderServiceImpl(TicketService ticketService, FilesUtilService filesUtilService) {
        this.ticketService = ticketService;
        this.filesUtilService = filesUtilService;
    }

    @Override
    @Transactional
    public void orderTickets(OrderDTO orderDTO) {

        //post order -> if success then generate pdf (try catch finally)
        // 1 update tickets
        // 2 save transaction data
        // 3 generate pdf

        System.out.println(orderDTO);
//        postOrder(orderedTicketsDTO);

        //TODO pdf should be returned example below:
        //return generateOrderConfirmation(orderedTicketsDTO);
//        generateOrderConfirmation(orderedTicketsDTO);

    }

    private void generateOrderConfirmation(OrderDTO orderedTicketsDTO) {
        //TODO code for generating PDF, should be returned from public void orderTickets(OrderDTO orderedTicketsDTO)
    }

    private void postOrder(OrderDTO orderedTicketsDTO) {
        orderedTicketsDTO.getOrderedTickets()
                .forEach(orderedTicketDTO -> {

                    TicketDTO found = ticketService.findById(orderedTicketDTO.getId());

                    decreaseInStockAmount(orderedTicketDTO, found);

                    ticketService.saveOrUpdateTicket(found);
                });

    }

    private void decreaseInStockAmount(OrderedTicketDTO orderedTicketDTO, TicketDTO found) {
        found.setInStock(
                found.getInStock() - orderedTicketDTO.getAmount()
        );
    }
}
