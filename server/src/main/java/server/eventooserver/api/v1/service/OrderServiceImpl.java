package server.eventooserver.api.v1.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import server.eventooserver.api.v1.dto.InvoiceDTO;
import server.eventooserver.api.v1.mapper.InvoiceMapper;
import server.eventooserver.api.v1.repository.OrderRepository;
import server.eventooserver.domain.Invoice;
import server.eventooserver.domain.OrderedTicket;
import server.eventooserver.domain.Ticket;
import server.eventooserver.domain.UserDetails;

import javax.transaction.Transactional;
import java.io.ByteArrayOutputStream;
import java.util.List;
import java.util.stream.Collectors;

import static server.eventooserver.api.v1.service.util.SharedConstans.S3_INVOICE_DIR;

@Slf4j
@Service
public class OrderServiceImpl implements OrderService {

    private final TicketService ticketService;
    private final FilesUtilService filesUtilService;
    private final UserService userService;
    private final AwsS3service awsS3service;

    private final OrderRepository orderRepository;

    private final InvoiceMapper invoiceMapper = InvoiceMapper.INSTANCE;

    public OrderServiceImpl(TicketService ticketService, FilesUtilService filesUtilService, UserService userService, OrderRepository orderRepository, AwsS3service awsS3service) {
        this.ticketService = ticketService;
        this.filesUtilService = filesUtilService;
        this.userService = userService;
        this.orderRepository = orderRepository;
        this.awsS3service = awsS3service;
    }

    @Override
    @Transactional
    public String orderTickets(InvoiceDTO invoiceDTO) {

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

        return generateConfirmationOrder(saved);

    }

    @Override
    public ByteArrayOutputStream downloadInvoice(String fileName) {

        String keyName = S3_INVOICE_DIR + fileName;

        return awsS3service.getFile(keyName);
    }

    private String generateConfirmationOrder(Invoice invoice) {

        return filesUtilService.generateConfirmationOrder(invoice);

    }


}
