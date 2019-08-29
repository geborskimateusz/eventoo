package server.eventooserver.helpers.controller;

public class TestApiUrlStrings {

    public static final String API_V1 = "/api/v1/";


    public static final String API_V1_EVENTS = API_V1 + "events";
    public static final String API_V1_EVENTS_FIND_BY_GENRE = API_V1_EVENTS + "/Dance?page=0";

    public static final String API_V1_MESSAGES = API_V1  + "messages/";
    public static final String API_V1_MESSAGES_SEND_CONFIRMATION_ORDER = API_V1_MESSAGES + "/confirmationOrder";
    public static final String API_V1_MESSAGES_CONTACT_REQUEST = API_V1_MESSAGES + "/contactRequest";

}
