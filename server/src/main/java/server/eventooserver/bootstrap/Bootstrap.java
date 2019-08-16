//package server.eventooserver.bootstrap;
//
//import lombok.AllArgsConstructor;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.stereotype.Component;
//
//import server.eventooserver.api.v1.dto.*;
//import server.eventooserver.api.v1.mapper.InvoiceMapper;
//import server.eventooserver.api.v1.repository.*;
//import server.eventooserver.api.v1.service.*;
//import server.eventooserver.domain.*;
//
//import java.time.LocalDate;
//import java.util.Arrays;
//import java.util.List;
//import java.util.stream.Collectors;
//
//
//@Component
//public class Bootstrap implements CommandLineRunner {
//
//    private final UserDetailsRepository userDetailsRepository;
//    private final AddressRepository addressRepository;
//    private final OrderRepository orderRepository;
//    private final TicketRepository ticketRepository;
//    private final OrderService orderService;
//    private final TicketService ticketService;
//    private final FilesUtilService filesUtilService;
//    private final UserService userService;
//    private final InvoiceMapper invoiceMapper = InvoiceMapper.INSTANCE;
//
//
//    public Bootstrap(UserDetailsRepository userDetailsRepository, AddressRepository addressRepository, OrderRepository orderRepository, TicketRepository ticketRepository, OrderService orderService, TicketService ticketService, FilesUtilService filesUtilService, UserService userService) {
//        this.userDetailsRepository = userDetailsRepository;
//        this.addressRepository = addressRepository;
//        this.orderRepository = orderRepository;
//        this.ticketRepository = ticketRepository;
//        this.orderService = orderService;
//        this.ticketService = ticketService;
//        this.filesUtilService = filesUtilService;
//        this.userService = userService;
//    }
//
//    @Override
//    public void run(String... args) throws Exception {
//
//        AddressDTO address = AddressDTO.builder()
//                .country("Fcountry")
//                .city("Fcity")
//                .homeNo("2/65")
//                .postalCode("23-432")
//                .street("Fstreet")
//                .build();
//
//        UserDetailsDTO userDetailsDTO = UserDetailsDTO.builder()
//                .id(2L)
//                .firstName("John")
//                .lastName("Doe")
//                .email("fakeemail@gmail.com")
//                .imagePath("src/assets/img/user-1.jpg")
//                .phone("987-879-789")
//                .address(address)
//                .build();
//
//        OrderedTicketDTO orderedTicketDTO = OrderedTicketDTO.builder()
//                .amount(2)
//                .ticket(
//                        TicketDTO.builder()
//                                .id(2L)
//                                .totalAmmount(1)
//                                .inStock(1)
//                                .price(1)
//                                .event(null)
//                                .type(TicketType.GENERAL_ADMISSION)
//                                .build()
//                )
//                .build();
//
//        InvoiceDTO invoiceDTO = InvoiceDTO.builder()
//                .orderDate(LocalDate.now())
//                .orderedTickets(Arrays.asList(orderedTicketDTO).stream().collect(Collectors.toSet()))
//                .userDetailsId(userDetailsDTO.getId())
//                .build();
//
//        ////////////////////
////        orderService.orderTickets(invoiceDTO);
//
////        UserDetails userDetails = userService.findById(invoiceDTO.getUserDetailsId());
////
////
////        Invoice invoice = invoiceMapper.invoiceDTOtoInvoice(invoiceDTO);
////        List<OrderedTicket> ticketList = invoice.getOrderedTickets().stream()
////                .map(orderedTicket -> {
////                    Ticket ticket = ticketService.findById(orderedTicket.getTicket().getId());
////
////                    orderedTicket.setTicket(ticket);
////
////                    return orderedTicket;
////                }).collect(Collectors.toList());
////
////        ticketList.forEach(orderedTicket -> invoice.addOrderedTicket(orderedTicket));
////
////        invoice.setUserDetails(userDetails);
////
////        orderRepository.save(invoice);
//
//
//    }
//
//    private void generateUser() {
//        Address address = Address.builder()
//                .country("Fcountry")
//                .city("Fcity")
//                .homeNo("2/65")
//                .postalCode("23-432")
//                .street("Fstreet")
//                .build();
//
//        Address saved = addressRepository.save(address);
//
//        UserDetails userDetails = UserDetails.builder()
//                .firstName("John")
//                .lastName("Doe")
//                .email("fakeemail@gmail.com")
//                .imagePath("src/assets/img/user-1.jpg")
//                .phone("987-879-789")
//                .address(saved)
//                .build();
//
//        userDetailsRepository.save(userDetails);
//    }
//}
