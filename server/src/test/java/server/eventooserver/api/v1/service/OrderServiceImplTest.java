package server.eventooserver.api.v1.service;

import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import server.eventooserver.api.v1.dto.InvoiceDTO;
import server.eventooserver.api.v1.repository.OrderRepository;
import server.eventooserver.domain.Invoice;
import server.eventooserver.domain.UserDetails;
import server.eventooserver.helpers.bootstrap.InvoiceDatasource;
import server.eventooserver.helpers.bootstrap.UserDetailsDatasource;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyBoolean;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.when;
import static server.eventooserver.api.v1.service.util.SharedConstans.PDF_EXTENSION;

class OrderServiceImplTest {

    @Mock
    TicketService ticketService;

    @Mock
    FilesUtilService filesUtilService;

    @Mock
    UserService userService;

    @Mock
    AwsS3service awsS3service;

    @Mock
    OrderRepository orderRepository;

    OrderService orderService;

    public OrderServiceImplTest() {
        MockitoAnnotations.initMocks(this);
        orderService = new OrderServiceImpl(
                ticketService,
                filesUtilService,
                userService,
                orderRepository,
                awsS3service
        );
    }

    @Test
    void orderTickets() {

        InvoiceDTO invoiceDTO = InvoiceDatasource.getInvoiceDTO();
        UserDetails userDetails = UserDetailsDatasource.getUserDetails();

        String fileName = userDetails.getEmail() + invoiceDTO.getOrderDate() + PDF_EXTENSION;

        when(userService.findById(anyLong())).thenReturn(userDetails);
        when(filesUtilService.generateConfirmationOrder(any(Invoice.class))).thenReturn(fileName);

        String actual = orderService.orderTickets(invoiceDTO);
    }

    @Test
    void downloadInvoice() {
    }
}