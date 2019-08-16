package server.eventooserver.api.v1.service;

import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import org.springframework.stereotype.Service;
import server.eventooserver.api.v1.dto.InvoiceDTO;
import server.eventooserver.api.v1.dto.OrderedTicketDTO;
import server.eventooserver.api.v1.dto.UserDetailsDTO;
import server.eventooserver.domain.Invoice;
import server.eventooserver.domain.OrderedTicket;
import server.eventooserver.domain.TicketType;
import server.eventooserver.domain.UserDetails;

import javax.transaction.Transactional;
import java.io.IOException;
import java.net.URISyntaxException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;
import java.util.List;

import static server.eventooserver.api.v1.service.util.OrderConstans.*;

@Service
public class OrderPdfUtilImpl implements PdfUtil {

    private final UserService userService;

    public OrderPdfUtilImpl(UserService userService) {
        this.userService = userService;
    }

    @Override
    public void renderParagraphs(Document document, Integer number) throws DocumentException {
        while (number > 0) {
            document.add(new Paragraph(NEW_LINE));
            number--;
        }
    }

    @Override
    public void renderLogo(Document document) throws URISyntaxException, IOException, DocumentException {
        Path path = Paths.get(ClassLoader.getSystemResource(LOGO_PATH).toURI());
        Image img = Image.getInstance(path.toAbsolutePath().toString());
        img.setAbsolutePosition(45, 790);
        img.scalePercent(50);
        document.add(img);

        Chunk header = new Chunk(EVENTOO, HEADER_FONT);
        document.add(header);
    }

    @Override
    public void addHeadersRow(PdfPTable table) {
        PdfPCell payersDetail = new PdfPCell(new Phrase(PAYER_S_DETAIL, FONT_MEDIUM_BOLD));
        renderCell(payersDetail);
        table.addCell(payersDetail);

        PdfPCell recipientsDetails = new PdfPCell(new Phrase(RECIPIENT_S_DETAILS, FONT_MEDIUM_BOLD));
        renderCell(recipientsDetails);
        table.addCell(recipientsDetails);

        PdfPCell title = new PdfPCell(new Phrase(TITLE, FONT_MEDIUM_BOLD));
        renderCell(title);
        table.addCell(title);
    }

    @Override
    public void renderDetailsRows(PdfPTable table, Invoice invoice) {
        generateUserDetails(table,invoice);

        generateCompanyDetails(table);

        generateTitle(table);
    }

    @Override
    public void renderOrder(Document document, Set<OrderedTicket> orderedTicketsSet) throws DocumentException {

        List<OrderedTicket> orderedTickets = new ArrayList<>(orderedTicketsSet);

        renderParagraph(document);

        Chunk from = new Chunk(ORDER, FONT_BIG_BOLD);
        document.add(from);
        renderParagraph(document);

        int orderedListStartingPoint = 1;
        for (int i = orderedListStartingPoint; i <= orderedTickets.size(); i++) {
            OrderedTicket orderedTicket = orderedTickets.get(i - orderedListStartingPoint);

            System.out.println(orderedTickets);


            Chunk order = new Chunk(
                    i + DOT + WHITE_SPACE + orderedTicket.getTicket().getEvent().getTitle() + COMMA + WHITE_SPACE +
                            orderedTicket.getTicket().getEvent().getLocation().getFullAddress() + COMMA + WHITE_SPACE +
                            orderedTicket.getAmount() + TIMES + WHITE_SPACE +
                            convertType(orderedTicket.getTicket().getType())
                    , FONT_MEDIUM);
            document.add(order);
            renderParagraph(document);
        }

        renderParagraphs(document, 1);

        Chunk total = new Chunk(TOTAL + calculateTotalPrice(orderedTickets) + DOLLAR_SIGN, FONT_BIG);
        document.add(total);
    }

    private void renderParagraph(Document document) throws DocumentException {
        document.add(new Paragraph());
    }


    //Example:
    //GOLDEN_CIRCLE_EARLY_ENTRANCE -> Golden Circle Early Entrance
    private String convertType(TicketType ticketType) {
        String[] split = ticketType.toString()
                .toLowerCase()
                .replace(UNDERSCORE, WHITE_SPACE)
                .split(WHITE_SPACE);

        StringBuilder builder = new StringBuilder();
        for (String s : split) {
            builder.append(
                    s.substring(0, 1).toUpperCase() +
                            s.substring(1) + WHITE_SPACE);
        }


        return builder.toString();
    }

    private Integer calculateTotalPrice(List<OrderedTicket> orderedTickets) {

        return orderedTickets.stream()
                .map(orderedTicketDTO -> orderedTicketDTO.getAmount() * orderedTicketDTO.getTicket().getPrice())
                .reduce((price1, price2) -> price1 + price2).get();
    }


    private void generateCompanyDetails(PdfPTable table) {
        PdfPCell cell = new PdfPCell(new Phrase(COMPANY_DETAILS, FONT_MEDIUM));
        renderCell(cell);
        table.addCell(cell);
    }

    private void generateTitle(PdfPTable table) {

        //Fake order number just for pdf purposes
        String orderNumber = UUID.randomUUID().toString();

        String builder = ORDER_TITLE_PARAGRAPH + orderNumber;

        PdfPCell cell = new PdfPCell(new Phrase(builder, FONT_MEDIUM));
        renderCell(cell);
        table.addCell(cell);
    }

    private void renderCell(PdfPCell cell) {
        cell.setHorizontalAlignment(Element.ALIGN_LEFT);
        cell.setPadding(5);
        cell.setExtraParagraphSpace(5);
        cell.setBorder(Rectangle.NO_BORDER);
    }

    @Transactional
    public void generateUserDetails(PdfPTable table, Invoice invoice)  {

        UserDetails userDetails = invoice.getUserDetails();

                String fullName = userDetails.getFirstName() + WHITE_SPACE + userDetails.getLastName() + NEW_LINE;

        String addressPartOne =
                userDetails.getAddress().getCity() + COMMA + WHITE_SPACE +
                        userDetails.getAddress().getStreet() + WHITE_SPACE +
                        userDetails.getAddress().getHomeNo() + NEW_LINE;

        String addressPartTwo =
                userDetails.getAddress().getPostalCode() + COMMA + WHITE_SPACE +
                        userDetails.getAddress().getCountry() + NEW_LINE;

        String phoneNum = userDetails.getPhone() + NEW_LINE;

        String email = userDetails.getEmail();


        String builder = fullName +
                addressPartOne +
                addressPartTwo +
                phoneNum +
                email;

        PdfPCell cell = new PdfPCell(new Phrase(builder, FONT_MEDIUM));
        renderCell(cell);
        table.addCell(cell);
    }
}
