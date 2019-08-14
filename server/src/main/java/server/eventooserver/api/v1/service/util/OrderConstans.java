package server.eventooserver.api.v1.service.util;

import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Font;
import com.itextpdf.text.FontFactory;

public final class OrderConstans {
    public static final String NEW_LINE = "\n";
    public static final String COLON = ":";
    public static final String COMMA = ",";
    public static final String UNDERSCORE = "_";
    public static final String DOT = ".";
    public static final String WHITE_SPACE = " ";
    public static final String DOLLAR_SIGN = "$";
    public static final String TIMES = "x";

    public static final String PDF_EXTENSION = DOT + "pdf";
    private static final String PNG_EXTENSION = "png";

    public static final String LOGO_PATH = "static/pdf/eventoo-logo" + DOT + PNG_EXTENSION;

    public static final String EVENTOO = "Eventoo";
    public static final String ORDER_TITLE_PARAGRAPH = "Order number" + COLON + WHITE_SPACE + NEW_LINE;
    private static final String COMPANY_ADDRESS_PART_TWO = "54-123" + COMMA + " Poland" + NEW_LINE;
    private static final String COMPANY_ADDRESS_PART_ONE = "Fake city" + COMMA + " Fake Street, 12/4" + NEW_LINE;
    private static final String COMPANY_NAME = EVENTOO + WHITE_SPACE + "Company" + NEW_LINE;
    private static final String FAKE_ACC_NUMBER = "5133459698682025";
    private static final String ACCOUNT_NUM = "Account number" + COLON + " " + FAKE_ACC_NUMBER;
    public static final String COMPANY_DETAILS = COMPANY_NAME +
            COMPANY_ADDRESS_PART_ONE +
            COMPANY_ADDRESS_PART_TWO +
            ACCOUNT_NUM;
    public static final String TOTAL = "Total" + COLON + WHITE_SPACE;
    public static final String ORDER = "Order" + COLON;
    public static final String TITLE = "Title" + COLON;
    public static final String RECIPIENT_S_DETAILS = "Recipient's details" + COLON;
    public static final String PAYER_S_DETAIL = "Payer's detail" + COLON;

    private static final BaseColor HEADER_BASE_COLOR = new BaseColor(194, 155, 232);
    public static final Font HEADER_FONT = FontFactory.getFont(FontFactory.COURIER, 18, HEADER_BASE_COLOR);
    public static final Font FONT_BIG = FontFactory.getFont(FontFactory.HELVETICA, 10, BaseColor.BLACK);
    public static final Font FONT_BIG_BOLD = FontFactory.getFont(FontFactory.HELVETICA, 10, Font.BOLD);
    public static final Font FONT_MEDIUM = FontFactory.getFont(FontFactory.HELVETICA, 8, BaseColor.BLACK);
    public static final Font FONT_MEDIUM_BOLD = new Font(Font.FontFamily.HELVETICA, 10, Font.BOLD);

}
