package server.eventooserver.bootstrap;


import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import com.itextpdf.text.pdf.draw.LineSeparator;
import server.eventooserver.api.v1.dto.*;
import server.eventooserver.domain.MusicGenre;
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

    static Font headerFont = FontFactory.getFont(FontFactory.COURIER, 18, HEADER_BASE_COLOR);
    static Font fontBig = FontFactory.getFont(FontFactory.HELVETICA, 10, BaseColor.BLACK);
    static Font fontMedium = FontFactory.getFont(FontFactory.HELVETICA, 8, BaseColor.BLACK);
    static Font fontSmall = FontFactory.getFont(FontFactory.COURIER, 6, BaseColor.BLACK);
    static Font fontMediumBold = new Font(Font.FontFamily.HELVETICA, 10, Font.BOLD);


    public static void main(String[] args) throws IOException, DocumentException, URISyntaxException {
//        Path path = Paths.get(ClassLoader.getSystemResource("static/pdf/eventoo-logo.png").toURI());
//        Image img = Image.getInstance(path.toAbsolutePath().toString());
//        img.setAbsolutePosition(540, 790);
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
////        orderTickets(document);
//
//        document.close();

        Document document = new Document();
        PdfWriter.getInstance(document, new FileOutputStream("iTextTable.pdf"));

        document.open();

        Path path = Paths.get(ClassLoader.getSystemResource("static/pdf/eventoo-logo.png").toURI());
        Image img = Image.getInstance(path.toAbsolutePath().toString());
        img.setAbsolutePosition(45, 790);
        img.scalePercent(50);
        document.add(img);

        Chunk header = new Chunk("Eventoo", headerFont);
        document.add(header);


        document.add(new Paragraph("\n \n"));

        LineSeparator l = new LineSeparator();
        document.add(new Chunk(l));

        PdfPTable table = new PdfPTable(3);
        addHeaderRow(table);
        addRows(table);

        document.add(table);

        document.add(new Chunk(l));

        orderTickets(document);


        document.close();

    }

//    private static void addTableHeader(PdfPTable table) {
//        Stream.of("column header 1", "column header 2", "column header 3")
//                .forEach(columnTitle -> {
//                    PdfPCell header = new PdfPCell();
//                    header.setBackgroundColor(BaseColor.LIGHT_GRAY);
//                    header.setBorderWidth(2);
//                    header.setPhrase(new Phrase(columnTitle));
//                    table.addCell(header);
//                });
//    }

//    private static void addCustomRows(PdfPTable table)
//            throws URISyntaxException, BadElementException, IOException {
//        Path path = Paths.get(ClassLoader.getSystemResource("static/pdf/eventoo-logo.png").toURI());
//        Image img = Image.getInstance(path.toAbsolutePath().toString());
//        img.scalePercent(10);
//
//        PdfPCell imageCell = new PdfPCell(img);
//        table.addCell(imageCell);
//
//        PdfPCell horizontalAlignCell = new PdfPCell(new Phrase("row 2, col 2"));
//        horizontalAlignCell.setHorizontalAlignment(Element.ALIGN_CENTER);
//        table.addCell(horizontalAlignCell);
//
//        PdfPCell verticalAlignCell = new PdfPCell(new Phrase("row 2, col 3"));
//        verticalAlignCell.setVerticalAlignment(Element.ALIGN_BOTTOM);
//        table.addCell(verticalAlignCell);
//    }


    private static void addHeaderRow(PdfPTable table) {
        PdfPCell payersDetail = new PdfPCell(new Phrase("Payer's detail:", fontMediumBold));
        payersDetail.setHorizontalAlignment(Element.ALIGN_LEFT);
        payersDetail.setPadding(5);
        payersDetail.setExtraParagraphSpace(5);
        payersDetail.setBorder(Rectangle.NO_BORDER);
        table.addCell(payersDetail);

        PdfPCell recipientsDetails = new PdfPCell(new Phrase("Recipient's details:", fontMediumBold));
        recipientsDetails.setHorizontalAlignment(Element.ALIGN_LEFT);
        recipientsDetails.setPadding(5);
        recipientsDetails.setExtraParagraphSpace(5);
        recipientsDetails.setBorder(Rectangle.NO_BORDER);
        table.addCell(recipientsDetails);

        PdfPCell title = new PdfPCell(new Phrase("Title:", fontMediumBold));
        title.setHorizontalAlignment(Element.ALIGN_LEFT);
        title.setPadding(5);
        title.setExtraParagraphSpace(5);
        title.setBorder(Rectangle.NO_BORDER);
        table.addCell(title);
    }


    private static void addRows(PdfPTable table) throws DocumentException {
        generateUserDetails(table);

        generateCompanyDetails(table);

        generateTitle(table);
    }

    private static void generateTitle(PdfPTable table) {
        String paragraph = "Transfer details for order: " + "\n";
        String orderNumber = UUID.randomUUID().toString();

        String builder = paragraph + orderNumber;

        PdfPCell title = new PdfPCell(new Phrase(builder, fontMedium));
        title.setHorizontalAlignment(Element.ALIGN_LEFT);
        title.setPadding(5);
        title.setExtraParagraphSpace(5);
        title.setBorder(Rectangle.NO_BORDER);
        table.addCell(title);
    }

    private static void orderTickets(Document document) throws DocumentException {
        generateOrdererdEvents();


        document.add(new Paragraph());

        Chunk from = new Chunk("Order", fontBig);
        document.add(from);
        document.add(new Paragraph());

        for (int i = 1; i <= generateOrdererdEvents().size(); i++) {
            OrderedTicketDTO orderedEvent = generateOrdererdEvents().get(i - 1);

            Chunk order = new Chunk(
                    i + ". " + orderedEvent.getEvent().getTitle() + ", " +
                            orderedEvent.getEvent().getLocation().getFullAddress() + ", " +
                            orderedEvent.getAmount() + "x " +
                            orderedEvent.getType().toString()
                    , fontSmall);
            document.add(order);
            document.add(new Paragraph());
        }


        document.add(new Paragraph("\n"));

        Chunk total = new Chunk("Total: " + calculateTotal() + "$", fontBig);
        document.add(total);


    }

    private static Integer calculateTotal() {

        return generateOrdererdEvents().stream()
                .map(orderedTicketDTO -> orderedTicketDTO.getAmount() * orderedTicketDTO.getPrice())
                .reduce((price1, price2) -> price1 + price2).get();
    }

    private static List<OrderedTicketDTO> generateOrdererdEvents() {

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
                .type(TicketType.GENERAL_ADMISSION)
                .build();

        return Arrays.asList(dto1, dto1, dto1, dto1);

    }

    //
    private static void generateCompanyDetails(PdfPTable table) throws DocumentException {

        String companyName = "Eventoo Company" + "\n";

        String addressPartOne = "Fake city, Fake Street, 12/4" + "\n";

        String addressPartTwo = "54-123, Poland" + "\n";

        String accountNum = "Account number: 5133459698682025";


        String builder = companyName +
                addressPartOne +
                addressPartTwo +
                accountNum;

        PdfPCell cell = new PdfPCell(new Phrase(builder, fontMedium));
        cell.setHorizontalAlignment(Element.ALIGN_LEFT);
        cell.setPadding(5);
        cell.setBorder(Rectangle.NO_BORDER);

        cell.setExtraParagraphSpace(5);
        table.addCell(cell);


    }

    private static void generateUserDetails(PdfPTable table) throws DocumentException {
        UserDetailsDTO userDetailsDTO = getUserDetailsDTO();

        String fullName = userDetailsDTO.getFirstName() + " " + userDetailsDTO.getLastName() + "\n";

        String addressPartOne =
                userDetailsDTO.getAddress().getCity() + ", " +
                        userDetailsDTO.getAddress().getStreet() + " " +
                        userDetailsDTO.getAddress().getHomeNo() + "\n";

        String addressPartTwo =
                userDetailsDTO.getAddress().getPostalCode() + ", " +
                        userDetailsDTO.getAddress().getCountry() + "\n";

        String phoneNum = userDetailsDTO.getPhone() + "\n";

        String email = userDetailsDTO.getEmail();


        String builder = fullName +
                addressPartOne +
                addressPartTwo +
                phoneNum +
                email;
        PdfPCell cell = new PdfPCell(new Phrase(builder, fontMedium));
        cell.setHorizontalAlignment(Element.ALIGN_LEFT);
        cell.setPadding(5);
        cell.setBorder(Rectangle.NO_BORDER);
        cell.setExtraParagraphSpace(5);
        table.addCell(cell);
    }

    private static UserDetailsDTO getUserDetailsDTO() {
        return UserDetailsDTO.builder()
                .firstName("John")
                .lastName("Doe")
                .address(AddressDTO.builder().country("Poland").city("Katowice").street("Fake Street").homeNo("2").postalCode("42-123").build())
                .email("fakeemail@gmail.com")
                .phone("511 123 432")
                .build();
    }


}
