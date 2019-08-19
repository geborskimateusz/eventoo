package server.eventooserver.api.v1.service.util;

import static server.eventooserver.api.v1.service.util.OrderConstans.COMPANY_DETAILS;

public final class MessageConstans {

    public static final String ORDER_CONFIRMATION_PREFIX = "Order_confirmation_";

    public static final String CONFIRMATION_ORDER_SUBJECT = "Confirmation order - Eventoo";

    public static final String CONFIRMATION_ORDER_TEXT =
            "Thank you very much for your order. \n" +
            "You can find order confirmation in attachment. \n\n" +
            "If you will not make transaction your reservation will expire in 3 days from now. \n\n" +
            COMPANY_DETAILS;
}
