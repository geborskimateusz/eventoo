package server.eventooserver.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

public enum TicketType {

    @JsonProperty("Vip")
    VIP,

    @JsonProperty("Golden Circle Early Entrance")
    GOLDEN_CIRCLE_EARLY_ENTRANCE,

    @JsonProperty("Golden Circle Regular")
    GOLDEN_CIRCLE_REGULAR,

    @JsonProperty("General Admission")
    GENERAL_ADMISSION,

    @JsonProperty("Stands")
    STANDS
}
