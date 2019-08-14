package server.eventooserver.api.v1.service;

import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import org.springframework.stereotype.Service;
import server.eventooserver.api.v1.dto.OrderDTO;
import server.eventooserver.api.v1.dto.OrderedTicketDTO;
import server.eventooserver.api.v1.dto.UserDetailsDTO;
import server.eventooserver.domain.TicketType;

import javax.transaction.Transactional;
import java.io.IOException;
import java.net.URISyntaxException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;

import static com.sun.xml.internal.ws.policy.privateutil.PolicyUtils.Text.NEW_LINE;
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
    public void renderDetailsRows(PdfPTable table, OrderDTO orderDTO) {
        generateUserDetails(table,orderDTO);

        generateCompanyDetails(table);

        generateTitle(table);
    }

    @Override
    public void orderTickets(Document document, List<OrderedTicketDTO> orderedTickets) throws DocumentException {
        renderParagraph(document);

        Chunk from = new Chunk(ORDER, FONT_BIG_BOLD);
        document.add(from);
        renderParagraph(document);

        int orderedListStartingPoint = 1;
        for (int i = orderedListStartingPoint; i <= orderedTickets.size(); i++) {
            OrderedTicketDTO orderedEvent = orderedTickets.get(i - orderedListStartingPoint);

            Chunk order = new Chunk(
                    i + DOT + WHITE_SPACE + orderedEvent.getEvent().getTitle() + COMMA + WHITE_SPACE +
                            orderedEvent.getEvent().getLocation().getFullAddress() + COMMA + WHITE_SPACE +
                            orderedEvent.getAmount() + TIMES + WHITE_SPACE +
                            convertType(orderedEvent.getType())
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

    private Integer calculateTotalPrice(List<OrderedTicketDTO> orderedTickets) {

        return orderedTickets.stream()
                .map(orderedTicketDTO -> orderedTicketDTO.getAmount() * orderedTicketDTO.getPrice())
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
    public void generateUserDetails(PdfPTable table, OrderDTO orderDTO)  {

        UserDetailsDTO userDetailsDTO = userService.findById(orderDTO.getUserId());

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

        PdfPCell cell = new PdfPCell(new Phrase(builder, FONT_MEDIUM));
        renderCell(cell);
        table.addCell(cell);
    }
}
