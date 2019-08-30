package server.eventooserver.helpers.bootstrap;

import server.eventooserver.api.v1.dto.EventDTO;
import server.eventooserver.api.v1.dto.ShoppingCartDTO;
import server.eventooserver.domain.Event;
import server.eventooserver.domain.ShoppingCartElement;
import server.eventooserver.domain.UserDetails;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class ShoppingCartDatasource {

    public static final long USER_ID = 1L;
    public static final EventDTO EVENT_DTO = EventDatasource.getEventDTO();
    public static final Event EVENT = EventDatasource.getEvent();
    public static final UserDetails USER_DETAILS = UserDetailsDatasource.getUserDetails();

    public static ShoppingCartDTO getShoppingCartDTO() {
        return ShoppingCartDTO.builder()
                .userId(USER_ID)
                .events(
                        Collections.singletonList(
                                EVENT_DTO
                        ))
                .build();
    }

    public static ShoppingCartElement getShoppingCartElement() {
        return ShoppingCartElement.builder()
                .event(EVENT)
                .userDetails(USER_DETAILS)
                .build();
    }

    public static List<ShoppingCartElement> getShoppingCartElements() {
        return Arrays.asList(getShoppingCartElement(), getShoppingCartElement());
    }
}
