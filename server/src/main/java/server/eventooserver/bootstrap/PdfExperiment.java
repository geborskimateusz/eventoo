package server.eventooserver.bootstrap;


import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import com.itextpdf.text.pdf.draw.LineSeparator;
import server.eventooserver.api.v1.dto.*;
import server.eventooserver.domain.TicketType;

import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URISyntaxException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.UUID;

public class PdfExperiment {

    public static final BaseColor HEADER_BASE_COLOR = new BaseColor(194, 155, 232);
    public static final String NEW_LINE = "\n";
    public static final String ORDER_TITLE_PARAGRAPH = "Order number: " + NEW_LINE;
    public static final String COMMA = ",";
    public static final String COMPANY_ADDRESS_PART_TWO = "54-123" + COMMA + " Poland" + NEW_LINE;
    public static final String COMPANY_ADDRESS_PART_ONE = "Fake city" + COMMA + " Fake Street, 12/4" + NEW_LINE;
    public static final String COMPANY_NAME = "Eventoo Company" + NEW_LINE;
    public static final String UNDERSCORE = "_";
    public static final String PDF_EXTENSION = ".pdf";
    public static final String LOGO_PNG = "static/pdf/eventoo-logo.png";
    public static final String ACC_NUMBER = "5133459698682025";
    public static final String ACCOUNT_NUM = "Account number: " + ACC_NUMBER;
    public static final String COMPANY_DETAILS = COMPANY_NAME +
            COMPANY_ADDRESS_PART_ONE +
            COMPANY_ADDRESS_PART_TWO +
            ACCOUNT_NUM;
    public static final String WHITE_SPACE = " ";
    public static final int DEFAULT_PADDING = 5;
    public static final int DEFAULT_PARAGRAPH_SPACE = 5;

    static Font headerFont = FontFactory.getFont(FontFactory.COURIER, 18, HEADER_BASE_COLOR);
    static Font fontBig = FontFactory.getFont(FontFactory.HELVETICA, 10, BaseColor.BLACK);
    static Font fontBigBold = FontFactory.getFont(FontFactory.HELVETICA, 10, Font.BOLD);
    static Font fontMedium = FontFactory.getFont(FontFactory.HELVETICA, 8, BaseColor.BLACK);
    static Font fontMediumBold = new Font(Font.FontFamily.HELVETICA, 10, Font.BOLD);
    static Font fontSmall = FontFactory.getFont(FontFactory.COURIER, 6, BaseColor.BLACK);


    public static void main(String[] args) throws IOException, DocumentException, URISyntaxException {

        //method argument
        OrderDTO orderDTO = orderDTO();

        Document document = new Document();
        String pdfName = orderDTO.getUserDetailsDTO().getEmail() + UNDERSCORE + orderDTO.getOrderDate();
        PdfWriter.getInstance(document, new FileOutputStream(pdfName + PDF_EXTENSION));

        document.open();

        renderLogo(document);


        renderParagraphs(document, 2);

        LineSeparator l = new LineSeparator();
        document.add(new Chunk(l));

        PdfPTable table = new PdfPTable(3);
        addHeaderRow(table);
        addRows(table, orderDTO);

        document.add(table);

        document.add(new Chunk(l));

        orderTickets(document);


        document.close();

    }

    private static void renderParagraphs(Document document, Integer number) throws DocumentException {
        while (number > 0) {
            document.add(new Paragraph(NEW_LINE));
            number--;
        }
    }

    private static void renderLogo(Document document) throws URISyntaxException, IOException, DocumentException {
        Path path = Paths.get(ClassLoader.getSystemResource(LOGO_PNG).toURI());
        Image img = Image.getInstance(path.toAbsolutePath().toString());
        img.setAbsolutePosition(45, 790);
        img.scalePercent(50);
        document.add(img);

        Chunk header = new Chunk("Eventoo", headerFont);
        document.add(header);
    }


    private static void addHeaderRow(PdfPTable table) {
        PdfPCell payersDetail = new PdfPCell(new Phrase("Payer's detail:", fontMediumBold));
        renderCell(payersDetail);
        table.addCell(payersDetail);

        PdfPCell recipientsDetails = new PdfPCell(new Phrase("Recipient's details:", fontMediumBold));
        renderCell(recipientsDetails);
        table.addCell(recipientsDetails);

        PdfPCell title = new PdfPCell(new Phrase("Title:", fontMediumBold));
        renderCell(title);
        table.addCell(title);
    }


    private static void addRows(PdfPTable table, OrderDTO orderDTO) throws DocumentException {
        generateUserDetails(table, orderDTO.getUserDetailsDTO());

        generateCompanyDetails(table);

        generateTitle(table);
    }


    private static void orderTickets(Document document) throws DocumentException {
        bootstrapOrderedTickets();


        renderParagraph(document);

        Chunk from = new Chunk("Order", fontBigBold);
        document.add(from);
        renderParagraph(document);

        for (int i = 1; i <= bootstrapOrderedTickets().size(); i++) {
            OrderedTicketDTO orderedEvent = bootstrapOrderedTickets().get(i - 1);

            Chunk order = new Chunk(
                    i + ". " + orderedEvent.getEvent().getTitle() + COMMA + " " +
                            orderedEvent.getEvent().getLocation().getFullAddress() + COMMA + " " +
                            orderedEvent.getAmount() + "x " +
                            convertType(orderedEvent.getType())
                    , fontMedium);
            document.add(order);
            renderParagraph(document);
        }


        renderParagraphs(document, 1);

        Chunk total = new Chunk("Total: " + calculateTotal() + "$", fontBig);
        document.add(total);


    }

    private static void renderParagraph(Document document) throws DocumentException {
        document.add(new Paragraph());
    }

    private static String convertType(TicketType ticketType) {
        String s = ticketType.toString().toLowerCase();
        s = s.replace("_", " ");
        String[] splitted = s.split(" ");

        StringBuilder builder = new StringBuilder();
        for (int i = 0; i < splitted.length; i++) {
            builder.append(splitted[i].substring(0, 1).toUpperCase() + splitted[i].substring(1) + " ");
        }


        return builder.toString();
    }

    private static Integer calculateTotal() {

        return bootstrapOrderedTickets().stream()
                .map(orderedTicketDTO -> orderedTicketDTO.getAmount() * orderedTicketDTO.getPrice())
                .reduce((price1, price2) -> price1 + price2).get();
    }


    private static void generateCompanyDetails(PdfPTable table)  {
        PdfPCell cell = new PdfPCell(new Phrase(COMPANY_DETAILS, fontMedium));
        renderCell(cell);
        table.addCell(cell);
    }

    private static void generateTitle(PdfPTable table) {

        //Fake order number just for pdf purposes
        String orderNumber = UUID.randomUUID().toString();

        String builder = ORDER_TITLE_PARAGRAPH + orderNumber;

        PdfPCell cell = new PdfPCell(new Phrase(builder, fontMedium));
        renderCell(cell);
        table.addCell(cell);
    }

    private static void renderCell(PdfPCell cell) {
        cell.setHorizontalAlignment(Element.ALIGN_LEFT);
        cell.setPadding(DEFAULT_PADDING);
        cell.setExtraParagraphSpace(DEFAULT_PARAGRAPH_SPACE);
        cell.setBorder(Rectangle.NO_BORDER);
    }

    private static void generateUserDetails(PdfPTable table, UserDetailsDTO userDetailsDTO) throws DocumentException {

        String fullName = userDetailsDTO.getFirstName() + WHITE_SPACE + userDetailsDTO.getLastName() + NEW_LINE;

        String addressPartOne =
                userDetailsDTO.getAddress().getCity() + COMMA + WHITE_SPACE +
                        userDetailsDTO.getAddress().getStreet() + WHITE_SPACE +
                        userDetailsDTO.getAddress().getHomeNo() + NEW_LINE;

        String addressPartTwo =
                userDetailsDTO.getAddress().getPostalCode() + COMMA + WHITE_SPACE +
                        userDetailsDTO.getAddress().getCountry() + NEW_LINE;

        String phoneNum = userDetailsDTO.getPhone() + NEW_LINE;

        String email = userDetailsDTO.getEmail();


        String builder = fullName +
                addressPartOne +
                addressPartTwo +
                phoneNum +
                email;

        PdfPCell cell = new PdfPCell(new Phrase(builder, fontMedium));
        renderCell(cell);
        table.addCell(cell);
    }


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    private static OrderDTO orderDTO() {

        return OrderDTO.builder()
                .orderDate(LocalDate.now())
                .orderedTickets(bootstrapOrderedTickets())
                .userDetailsDTO(bootstrapUserDetailsDTO())
                .build();
    }

    private static UserDetailsDTO bootstrapUserDetailsDTO() {
        return UserDetailsDTO.builder()
                .firstName("John")
                .lastName("Doe")
                .address(AddressDTO.builder().country("Poland").city("Katowice").street("Fake Street").homeNo("2").postalCode("42-123").build())
                .email("fakeemail@gmail.com")
                .phone("511 123 432")
                .build();
    }

    private static List<OrderedTicketDTO> bootstrapOrderedTickets() {

        EventDTO o1 = EventDTO.builder()
                .title("Fake Title")
                .date(LocalDate.now())
                .location(
                        LocationDTO.builder()
                                .fullAddress("Dolina Charlotty")
                                .build()
                )
                .tickets(new HashSet<>())
                .build();

        OrderedTicketDTO dto1 = OrderedTicketDTO.builder()
                .amount(3)
                .event(o1)
                .inStock(15)
                .price(145)
                .totalAmmount(20)
                .type(TicketType.GOLDEN_CIRCLE_EARLY_ENTRANCE)
                .build();

        return Arrays.asList(dto1, dto1, dto1, dto1);

    }


}
