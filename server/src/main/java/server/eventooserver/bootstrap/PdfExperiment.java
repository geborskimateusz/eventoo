//package server.eventooserver.bootstrap;
//
//
//import com.itextpdf.text.*;
//import com.itextpdf.text.pdf.PdfWriter;
//import server.eventooserver.api.v1.dto.*;
//import server.eventooserver.domain.MusicGenre;
//import server.eventooserver.domain.TicketType;
//
//import java.io.File;
//import java.io.FileOutputStream;
//import java.io.IOException;
//import java.net.URISyntaxException;
//import java.nio.file.Path;
//import java.nio.file.Paths;
//import java.time.LocalDate;
//import java.util.Arrays;
//import java.util.List;
//
//public class PdfExperiment {
//
//    public static final BaseColor HEADER_BASE_COLOR = new BaseColor(194, 155, 232);
//    static Font headerFont = FontFactory.getFont(FontFactory.COURIER, 18, HEADER_BASE_COLOR);
//    static Font fontMedium = FontFactory.getFont(FontFactory.COURIER, 12, BaseColor.BLACK);
//    static Font fontSmall = FontFactory.getFont(FontFactory.COURIER, 10, BaseColor.BLACK);
//
//
//    public static void main(String[] args) throws IOException, DocumentException, URISyntaxException {
//        Path path = Paths.get(ClassLoader.getSystemResource("static/pdf/hand-small.resized.png").toURI());
//        Image img = Image.getInstance(path.toAbsolutePath().toString());
//        img.setAbsolutePosition(45, 790);
//        img.scalePercent(50);
//
//        Document document = new Document();
//
//        String pdfName = getUserDetailsDTO().getId()+getUserDetailsDTO().getEmail();
//        File file = new File(pdfName +".pdf");
//        PdfWriter.getInstance(document, new FileOutputStream(file));
//
//        document.open();
//
//        document.add(img);
//
//
//
//        Chunk header = new Chunk("Eventoo", headerFont);
//        document.add(header);
//        document.add(new Paragraph("\n"));
//
//
//        generateUserDetails(document);
//
//        document.add(new Paragraph("\n"));
//
//        generateCompanyDetails(document);
//
//        document.add(new Paragraph("\n"));
//
//        orderTickets(document);
//
//        document.close();
//
//    }
//
//    private static void orderTickets(Document document) throws DocumentException {
//        generateOrdererdEvents();
//
//
//        document.add(new Paragraph());
//
//        Chunk from = new Chunk("Order", fontMedium);
//        document.add(from);
//        document.add(new Paragraph());
//
//        for (int i = 1; i <= generateOrdererdEvents().size(); i++) {
//            OrderedTicketDTO orderedEvent = generateOrdererdEvents().get(i - 1);
//
//            Chunk order = new Chunk(
//                    i + ". " + orderedEvent.getTicket().getEvent().getTitle() + ", " +
//                            orderedEvent.getTicket().getEvent().getLocation().getFullAddress() + ", " +
//                            orderedEvent.getAmount() + "x " +
//                            orderedEvent.getTicket().getType().toString()
//                    , fontSmall);
//            document.add(order);
//            document.add(new Paragraph());
//        }
//
//
//        document.add(new Paragraph("\n"));
//
//        Chunk total = new Chunk("Total: " + calculateTotal() + "$", fontMedium);
//        document.add(total);
//
//
//    }
//
//    private static Integer calculateTotal() {
//
//        return generateOrdererdEvents().stream()
//                .map(orderedTicketDTO -> orderedTicketDTO.getAmount() * orderedTicketDTO.getTicket().getPrice())
//                .reduce((price1, price2) -> price1 + price2).get();
//    }
//
//    private static List<OrderedTicketDTO> generateOrdererdEvents() {
//
//        EventDTO o1 = EventDTO.builder()
//                .title("title")
//                .date(LocalDate.now())
//                .description("asfasfsafasfasfasfasfsafasfasfasfasfsafasfasfasfasfsafasfasfasfasfsafasfasf")
//                .genre(MusicGenre.DANCE)
//                .img("asfasfsafasfasf")
//                .location(
//                        LocationDTO.builder().fullAddress("location")
//                                .lat(0.234)
//                                .lon(0.124)
//                                .partialAddress("asfasfsafasfasf")
//                                .build()
//                ).build();
//
//        OrderedTicketDTO dto1 = OrderedTicketDTO.builder()
//                .amount(2)
//                .ticket(
//                        TicketDTO.builder()
//                                .event(o1)
//                                .type(TicketType.GENERAL_ADMISSION)
//                                .inStock(12)
//                                .price(11)
//                                .totalAmmount(51)
//                                .build()
//                )
//                .build();
//
//        return Arrays.asList(dto1, dto1, dto1, dto1);
//
//    }
//
//    //
//    private static void generateCompanyDetails(Document document) throws DocumentException {
//
//        document.add(new Paragraph());
//
//        Chunk from = new Chunk("To", fontMedium);
//        document.add(from);
//        document.add(new Paragraph());
//
//        Chunk name = new Chunk("Eventoo Company", fontSmall);
//        document.add(name);
//        document.add(new Paragraph());
//
//        Chunk addressPartOne = new Chunk(
//                "Fake city, Fake Street, 12/4", fontSmall);
//        document.add(addressPartOne);
//        document.add(new Paragraph());
//
//        Chunk addressPartTwo = new Chunk(
//                "54-123, Poland", fontSmall);
//        document.add(addressPartTwo);
//        document.add(new Paragraph());
//
//        Chunk accNumber = new Chunk(
//                "Account number: 5133459698682025", fontSmall);
//        document.add(accNumber);
//        document.add(new Paragraph());
//
//
//
//    }
//
//    private static void generateUserDetails(Document document) throws DocumentException {
//        UserDetailsDTO userDetailsDTO = getUserDetailsDTO();
//
//        document.add(new Paragraph());
//
//        Chunk from = new Chunk("From", fontMedium);
//        document.add(from);
//        document.add(new Paragraph());
//
//
//        Chunk name = new Chunk(userDetailsDTO.getFirstName() + " " + userDetailsDTO.getLastName(), fontSmall);
//        document.add(name);
//        document.add(new Paragraph());
//
//        Chunk addressPartOne = new Chunk(
//                userDetailsDTO.getAddress().getCity() + ", " +
//                        userDetailsDTO.getAddress().getStreet() + " " +
//                        userDetailsDTO.getAddress().getHomeNo(), fontSmall);
//        document.add(addressPartOne);
//        document.add(new Paragraph());
//
//        Chunk addressPartTwo = new Chunk(
//                userDetailsDTO.getAddress().getPostalCode() + ", " +
//                        userDetailsDTO.getAddress().getCountry(), fontSmall);
//        document.add(addressPartTwo);
//        document.add(new Paragraph());
//
//        Chunk phone = new Chunk(
//                userDetailsDTO.getPhone(), fontSmall
//        );
//        document.add(phone);
//        document.add(new Paragraph());
//
//        Chunk email = new Chunk(
//                userDetailsDTO.getEmail(), fontSmall
//        );
//        document.add(email);
//        document.add(new Paragraph());
//    }
//
//    private static UserDetailsDTO getUserDetailsDTO() {
//        return UserDetailsDTO.builder()
//                    .firstName("John")
//                    .lastName("Doe")
//                    .address(AddressDTO.builder().country("Poland").city("Katowice").street("Fake Street").homeNo("2").postalCode("42-123").build())
//                    .email("fakeemail@gmail.com")
//                    .phone("511 123 432")
//                    .build();
//    }
//
//
//}
