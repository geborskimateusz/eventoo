package server.eventooserver.api.v1.service;

import com.itextpdf.text.DocumentException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import server.eventooserver.api.v1.dto.InvoiceDTO;
import server.eventooserver.api.v1.dto.OrderedTicketDTO;
import server.eventooserver.api.v1.dto.TicketDTO;
import server.eventooserver.api.v1.mapper.InvoiceMapper;
import server.eventooserver.api.v1.repository.OrderRepository;
import server.eventooserver.domain.Invoice;
import server.eventooserver.domain.OrderedTicket;
import server.eventooserver.domain.Ticket;
import server.eventooserver.domain.UserDetails;

import javax.transaction.Transactional;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
public class OrderServiceImpl implements OrderService {

    private final TicketService ticketService;
    private final FilesUtilService filesUtilService;
    private final UserService userService;

    private final OrderRepository orderRepository;

    private final InvoiceMapper invoiceMapper = InvoiceMapper.INSTANCE;

    public OrderServiceImpl(TicketService ticketService, FilesUtilService filesUtilService, UserService userService, OrderRepository orderRepository) {
        this.ticketService = ticketService;
        this.filesUtilService = filesUtilService;
        this.userService = userService;
        this.orderRepository = orderRepository;
    }

    @Override
    @Transactional
    public void orderTickets(InvoiceDTO invoiceDTO) {

        Invoice invoice = invoiceMapper.invoiceDTOtoInvoice(invoiceDTO);

        List<OrderedTicket> orderedTickets = invoice.getOrderedTickets().stream()
                .peek(orderedTicket -> {

                    Ticket ticket = ticketService.updateTicketByOrderAmount(orderedTicket);

                    orderedTicket.setTicket(ticket);

                }).collect(Collectors.toList());

        orderedTickets.forEach(invoice::addOrderedTicket);

        UserDetails userDetails = userService.findById(invoiceDTO.getUserDetailsId());
        invoice.setUserDetails(userDetails);

        Invoice saved = orderRepository.save(invoice);

        generateOrderConfirmation(saved);

    }

    private void generateOrderConfirmation(Invoice invoice) {
        filesUtilService.generateOrderConfirmation(invoice);
    }


}
