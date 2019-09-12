package server.eventooserver.api.v1.service.util;

import static server.eventooserver.api.v1.service.util.OrderConstans.COMPANY_DETAILS;
import static server.eventooserver.api.v1.service.util.OrderConstans.EVENTOO;

public final class MessageTemplates {

    public static final String ORDER_CONFIRMATION_PREFIX = "Order_confirmation_";

    public static final String CONFIRMATION_ORDER_SUBJECT = "Confirmation order - Eventoo";

    public static final String CONFIRMATION_ORDER_TEXT =
            "Thank you very much for your order. \n" +
                    "You can find order confirmation in attachment. \n\n" +
                    "If you will not make transaction your reservation will expire in 3 days from now. \n\n" +
                    COMPANY_DETAILS;

    public static final String CONTACT_REQUEST_SUBJECT = "Contact Request - Eventoo";

    private static final String CONTACT_REQUEST_TEXT =
            "You have reached " + EVENTOO + ". \n" +
                    "All of our representatives are currently busy, \n" +
                    "but if you leave us a detailed message with your number we will return your call in the next two hours. \n\n" +
                    "Thank you for email  and have a great day. \n\n" +
                    COMPANY_DETAILS;

    public static String getPersonalizeContactRequest(String fullName) {
        return "Hi " + fullName + "! \n\n"
                + CONTACT_REQUEST_TEXT;
    }
}
