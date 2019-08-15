//package server.eventooserver.bootstrap;
//
//import com.itextpdf.text.*;
//import com.itextpdf.text.pdf.PdfPCell;
//import com.itextpdf.text.pdf.PdfPTable;
//import com.itextpdf.text.pdf.PdfWriter;
//import com.itextpdf.text.pdf.draw.LineSeparator;
//import lombok.extern.slf4j.Slf4j;
//import server.eventooserver.api.v1.dto.*;
//import server.eventooserver.domain.TicketType;
//
//import java.io.FileOutputStream;
//import java.io.IOException;
//import java.net.URISyntaxException;
//import java.nio.file.Path;
//import java.nio.file.Paths;
//import java.time.LocalDate;
//import java.util.Arrays;
//import java.util.HashSet;
//import java.util.List;
//import java.util.UUID;
//
//@Slf4j
//public class PdfExperiment {
//
//    private static final String NEW_LINE = "\n";
//    private static final String COLON = ":";
//    private static final String COMMA = ",";
//    private static final String UNDERSCORE = "_";
//    private static final String DOT = ".";
//    private static final String WHITE_SPACE = " ";
//    private static final String DOLLAR_SIGN = "$";
//    private static final String TIMES = "x";
//
//    private static final String PDF_EXTENSION = DOT + "pdf";
//    private static final String PNG_EXTENSION = "png";
//
//    private static final String LOGO_PATH = "static/pdf/eventoo-logo" + DOT + PNG_EXTENSION;
//
//    private static final String EVENTOO = "Eventoo";
//    private static final String ORDER_TITLE_PARAGRAPH = "Order number" + COLON + WHITE_SPACE + NEW_LINE;
//    private static final String COMPANY_ADDRESS_PART_TWO = "54-123" + COMMA + " Poland" + NEW_LINE;
//    private static final String COMPANY_ADDRESS_PART_ONE = "Fake city" + COMMA + " Fake Street, 12/4" + NEW_LINE;
//    private static final String COMPANY_NAME = EVENTOO + WHITE_SPACE + "Company" + NEW_LINE;
//    private static final String FAKE_ACC_NUMBER = "5133459698682025";
//    private static final String ACCOUNT_NUM = "Account number" + COLON + " " + FAKE_ACC_NUMBER;
//    private static final String COMPANY_DETAILS = COMPANY_NAME +
//            COMPANY_ADDRESS_PART_ONE +
//            COMPANY_ADDRESS_PART_TWO +
//            ACCOUNT_NUM;
//    private static final String TOTAL = "Total" + COLON + WHITE_SPACE;
//    private static final String ORDER = "Order" + COLON;
//    private static final String TITLE = "Title" + COLON;
//    private static final String RECIPIENT_S_DETAILS = "Recipient's details" + COLON;
//    private static final String PAYER_S_DETAIL = "Payer's detail" + COLON;
//
//    private static final BaseColor HEADER_BASE_COLOR = new BaseColor(194, 155, 232);
//    private static final Font HEADER_FONT = FontFactory.getFont(FontFactory.COURIER, 18, HEADER_BASE_COLOR);
//    private static final Font FONT_BIG = FontFactory.getFont(FontFactory.HELVETICA, 10, BaseColor.BLACK);
//    private static final Font FONT_BIG_BOLD = FontFactory.getFont(FontFactory.HELVETICA, 10, Font.BOLD);
//    private static final Font FONT_MEDIUM = FontFactory.getFont(FontFactory.HELVETICA, 8, BaseColor.BLACK);
//    private static final Font FONT_MEDIUM_BOLD = new Font(Font.FontFamily.HELVETICA, 10, Font.BOLD);
//
//
//
//    public static void main(String[] args) throws IOException, DocumentException, URISyntaxException {
//
//
//        //method argument
//        InvoiceDTO orderDTO = orderDTO();
//
//        Document document = new Document();
//
//
//        String pdfName = bootstrapUserDetailsDTO().getEmail() + UNDERSCORE + orderDTO.getOrderDate();
//        PdfWriter.getInstance(document, new FileOutputStream("src/main/resources/static/pdf/" + pdfName + PDF_EXTENSION));
//
//        document.open();
//
//        renderLogo(document);
//
//
//        renderParagraphs(document, 2);
//
//        LineSeparator horizontalLine = new LineSeparator();
//        document.add(new Chunk(horizontalLine));
//
//        PdfPTable table = new PdfPTable(3);
//        addHeadersRow(table);
//        renderDetailsRows(table, orderDTO);
//
//        document.add(table);
//
//        document.add(new Chunk(horizontalLine));
//
//        orderTickets(document, orderDTO.getOrderedTickets());
//
//
//        document.close();
//
//    }
//
//    private static void renderParagraphs(Document document, Integer number) throws DocumentException {
//        while (number > 0) {
//            document.add(new Paragraph(NEW_LINE));
//            number--;
//        }
//    }
//
//    private static void renderLogo(Document document) throws URISyntaxException, IOException, DocumentException {
//        Path path = Paths.get(ClassLoader.getSystemResource(LOGO_PATH).toURI());
//        Image img = Image.getInstance(path.toAbsolutePath().toString());
//        img.setAbsolutePosition(45, 790);
//        img.scalePercent(50);
//        document.add(img);
//
//        Chunk header = new Chunk(EVENTOO, HEADER_FONT);
//        document.add(header);
//    }
//
//
//    private static void addHeadersRow(PdfPTable table) {
//        PdfPCell payersDetail = new PdfPCell(new Phrase(PAYER_S_DETAIL, FONT_MEDIUM_BOLD));
//        renderCell(payersDetail);
//        table.addCell(payersDetail);
//
//        PdfPCell recipientsDetails = new PdfPCell(new Phrase(RECIPIENT_S_DETAILS, FONT_MEDIUM_BOLD));
//        renderCell(recipientsDetails);
//        table.addCell(recipientsDetails);
//
//        PdfPCell title = new PdfPCell(new Phrase(TITLE, FONT_MEDIUM_BOLD));
//        renderCell(title);
//        table.addCell(title);
//    }
//
//
//    private static void renderDetailsRows(PdfPTable table, InvoiceDTO orderDTO) throws DocumentException {
//        generateUserDetails(table, bootstrapUserDetailsDTO());
//
//        generateCompanyDetails(table);
//
//        generateTitle(table);
//    }
//
//
//    private static void orderTickets(Document document, List<OrderedTicketDTO> orderedTickets) throws DocumentException {
//
//        renderParagraph(document);
//
//        Chunk from = new Chunk(ORDER, FONT_BIG_BOLD);
//        document.add(from);
//        renderParagraph(document);
//
//        int orderedListStartingPoint = 1;
//        for (int i = orderedListStartingPoint; i <= orderedTickets.size(); i++) {
//            OrderedTicketDTO orderedEvent = orderedTickets.get(i - orderedListStartingPoint);
//
//            Chunk order = new Chunk(
//                    i + DOT + WHITE_SPACE + orderedEvent.getEvent().getTitle() + COMMA + WHITE_SPACE +
//                            orderedEvent.getEvent().getLocation().getFullAddress() + COMMA + WHITE_SPACE +
//                            orderedEvent.getAmount() + TIMES + WHITE_SPACE +
//                            convertType(orderedEvent.getType())
//                    , FONT_MEDIUM);
//            document.add(order);
//            renderParagraph(document);
//        }
//
//        renderParagraphs(document, 1);
//
//        Chunk total = new Chunk(TOTAL + calculateTotalPrice() + DOLLAR_SIGN, FONT_BIG);
//        document.add(total);
//
//    }
//
//    private static void renderParagraph(Document document) throws DocumentException {
//        document.add(new Paragraph());
//    }
//
//
//    //Example:
//    //GOLDEN_CIRCLE_EARLY_ENTRANCE -> Golden Circle Early Entrance
//    private static String convertType(TicketType ticketType) {
//        String[] split = ticketType.toString()
//                .toLowerCase()
//                .replace(UNDERSCORE, WHITE_SPACE)
//                .split(WHITE_SPACE);
//
//        StringBuilder builder = new StringBuilder();
//        for (String s : split) {
//            builder.append(
//                    s.substring(0, 1).toUpperCase() +
//                            s.substring(1) + WHITE_SPACE);
//        }
//
//
//        return builder.toString();
//    }
//
//    private static Integer calculateTotalPrice() {
//
//        return bootstrapOrderedTickets().stream()
//                .map(orderedTicketDTO -> orderedTicketDTO.getAmount() * orderedTicketDTO.getPrice())
//                .reduce((price1, price2) -> price1 + price2).get();
//    }
//
//
//    private static void generateCompanyDetails(PdfPTable table) {
//        PdfPCell cell = new PdfPCell(new Phrase(COMPANY_DETAILS, FONT_MEDIUM));
//        renderCell(cell);
//        table.addCell(cell);
//    }
//
//    private static void generateTitle(PdfPTable table) {
//
//        //Fake order number just for pdf purposes
//        String orderNumber = UUID.randomUUID().toString();
//
//        String builder = ORDER_TITLE_PARAGRAPH + orderNumber;
//
//        PdfPCell cell = new PdfPCell(new Phrase(builder, FONT_MEDIUM));
//        renderCell(cell);
//        table.addCell(cell);
//    }
//
//    private static void renderCell(PdfPCell cell) {
//        cell.setHorizontalAlignment(Element.ALIGN_LEFT);
//        cell.setPadding(5);
//        cell.setExtraParagraphSpace(5);
//        cell.setBorder(Rectangle.NO_BORDER);
//    }
//
//    private static void generateUserDetails(PdfPTable table, UserDetailsDTO userDetailsDTO) throws DocumentException {
//
//        String fullName = userDetailsDTO.getFirstName() + WHITE_SPACE + userDetailsDTO.getLastName() + NEW_LINE;
//
//        String addressPartOne =
//                userDetailsDTO.getAddress().getCity() + COMMA + WHITE_SPACE +
//                        userDetailsDTO.getAddress().getStreet() + WHITE_SPACE +
//                        userDetailsDTO.getAddress().getHomeNo() + NEW_LINE;
//
//        String addressPartTwo =
//                userDetailsDTO.getAddress().getPostalCode() + COMMA + WHITE_SPACE +
//                        userDetailsDTO.getAddress().getCountry() + NEW_LINE;
//
//        String phoneNum = userDetailsDTO.getPhone() + NEW_LINE;
//
//        String email = userDetailsDTO.getEmail();
//
//
//        String builder = fullName +
//                addressPartOne +
//                addressPartTwo +
//                phoneNum +
//                email;
//
//        PdfPCell cell = new PdfPCell(new Phrase(builder, FONT_MEDIUM));
//        renderCell(cell);
//        table.addCell(cell);
//    }
//
//
//    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
//    private static InvoiceDTO orderDTO() {
//
//        return InvoiceDTO.builder()
//                .orderDate(LocalDate.now())
//                .orderedTickets(bootstrapOrderedTickets())
//                .userId(1L)
//                .build();
//    }
//
//    private static UserDetailsDTO bootstrapUserDetailsDTO() {
//        return UserDetailsDTO.builder()
//                .firstName("John")
//                .lastName("Doe")
//                .address(AddressDTO.builder().country("Poland").city("Katowice").street("Fake Street").homeNo("2").postalCode("42-123").build())
//                .email("fakeemail@gmail" + DOT + "com")
//                .phone("511 123 432")
//                .build();
//    }
//
//    private static List<OrderedTicketDTO> bootstrapOrderedTickets() {
//
//        EventDTO o1 = EventDTO.builder()
//                .title("Fake Title")
//                .date(LocalDate.now())
//                .location(
//                        LocationDTO.builder()
//                                .fullAddress("Dolina Charlotty")
//                                .build()
//                )
//                .tickets(new HashSet<>())
//                .build();
//
//        OrderedTicketDTO dto1 = OrderedTicketDTO.builder()
//                .amount(3)
//                .event(o1)
//                .inStock(15)
//                .price(145)
//                .totalAmmount(20)
//                .type(TicketType.GOLDEN_CIRCLE_EARLY_ENTRANCE)
//                .build();
//
//        return Arrays.asList(dto1, dto1, dto1, dto1);
//
//    }
//
//
//}
