//package server.eventooserver.bootstrap;
//
//import com.amazonaws.auth.AWSCredentials;
//import com.amazonaws.auth.AWSStaticCredentialsProvider;
//import com.amazonaws.auth.BasicAWSCredentials;
//import com.amazonaws.regions.Regions;
//import com.amazonaws.services.s3.AmazonS3;
//import com.amazonaws.services.s3.AmazonS3Client;
//import com.amazonaws.services.s3.AmazonS3ClientBuilder;
//import com.amazonaws.services.s3.model.Bucket;
//import lombok.AllArgsConstructor;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.http.MediaType;
//import org.springframework.mail.javamail.JavaMailSender;
//import org.springframework.mail.javamail.MimeMessageHelper;
//import org.springframework.stereotype.Component;
//
//import server.eventooserver.api.v1.dto.*;
//import server.eventooserver.api.v1.mapper.InvoiceMapper;
//import server.eventooserver.api.v1.repository.*;
//import server.eventooserver.api.v1.service.*;
//import server.eventooserver.domain.*;
//
//import javax.activation.DataSource;
//import javax.mail.MessagingException;
//import javax.mail.internet.MimeMessage;
//import javax.mail.util.ByteArrayDataSource;
//import java.io.ByteArrayOutputStream;
//import java.io.File;
//import java.io.IOException;
//import java.nio.file.Files;
//import java.nio.file.Paths;
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
//    private AmazonS3 s3client;
//
//    @Value("${amazon.properties.endpointUrl}")
//    private String endpointUrl;
//    @Value("${amazon.properties.bucketName}")
//    private String bucketName;
//    @Value("${amazon.properties.accessKey}")
//    private String accessKey;
//    @Value("${amazon.properties.secretKey}")
//    private String secretKey;
//
//    @Autowired
//    private JavaMailSender sender;
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
//    }

//    private void sendEmail() throws IOException {
//
//        byte[] array = Files.readAllBytes(Paths.get("/home/mat/Documents/Potwierdzenie_transakcji_nr_0054027546_290719.pdf"));
//
//        ByteArrayOutputStream baos = new ByteArrayOutputStream(array.length);
//        baos.write(array, 0, array.length);
//
//        DataSource aAttachment = new ByteArrayDataSource(baos.toByteArray(), MediaType.APPLICATION_OCTET_STREAM.toString());
//
//        try {
//            MimeMessage message = sender.createMimeMessage();
//            MimeMessageHelper helper = new MimeMessageHelper(message, true);
//
//            helper.setTo("eventoo.services@gmail.com");
//            helper.setText("How are you?");
//            helper.setSubject("Hi attachment");
//            helper.addAttachment("some file", aAttachment);
//
//            sender.send(message);
//        } catch (MessagingException e) {
//            System.out.println(e.getMessage());
//        }
//    }


//    private void generateInvoice() {
//        AddressDTO address = AddressDTO.builder()
//                .country("Fcountry")
//                .city("Fcity")
//                .homeNo("2/65")
//                .postalCode("23-432")
//                .street("Fstreet")
//                .build();
//
//        UserDetailsDTO userDetailsDTO = UserDetailsDTO.builder()
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
//        orderService.orderTickets(invoiceDTO);

//        UserDetails userDetails = userService.findById(invoiceDTO.getUserDetailsId());
//
//
//        Invoice invoice = invoiceMapper.invoiceDTOtoInvoice(invoiceDTO);
//        List<OrderedTicket> ticketList = invoice.getOrderedTickets().stream()
//                .map(orderedTicket -> {
//                    Ticket ticket = ticketService.findById(orderedTicket.getTicket().getId());
//
//                    orderedTicket.setTicket(ticket);
//
//                    return orderedTicket;
//                }).collect(Collectors.toList());
//
//        ticketList.forEach(orderedTicket -> invoice.addOrderedTicket(orderedTicket));
//
//        invoice.setUserDetails(userDetails);
//
//        orderRepository.save(invoice);
//    }

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
