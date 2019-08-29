package server.eventooserver.helpers.bootstrap;

import server.eventooserver.api.v1.dto.EventDTO;
import server.eventooserver.api.v1.dto.ShoppingCartDTO;

import java.util.Arrays;
import java.util.Collections;

public class ShoppingCartDTOdatasource {

    public static final long USER_ID = 1L;
    public static final EventDTO EVENT_DTO = EventDTOdatasource.getEventDTO();

    public static ShoppingCartDTO getShoppingCartDTO() {
        return ShoppingCartDTO.builder()
                .userId(USER_ID)
                .events(
                        Collections.singletonList(
                                EVENT_DTO
                        ))
                .build();
    }
}
