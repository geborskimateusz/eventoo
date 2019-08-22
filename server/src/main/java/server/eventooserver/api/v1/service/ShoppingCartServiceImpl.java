package server.eventooserver.api.v1.service;

import org.springframework.stereotype.Service;
import server.eventooserver.api.v1.dto.ShoppingCartDTO;
import server.eventooserver.api.v1.repository.ShoppingCartRepository;
import server.eventooserver.domain.Event;
import server.eventooserver.domain.ShoppingCart;
import server.eventooserver.domain.UserDetails;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ShoppingCartServiceImpl implements ShoppingCartService {

    private final UserService userService;
    private final EventService eventService;

    private final ShoppingCartRepository shoppingCartRepository;

    public ShoppingCartServiceImpl(UserService userService, EventService eventService, ShoppingCartRepository shoppingCartRepository) {
        this.userService = userService;
        this.eventService = eventService;
        this.shoppingCartRepository = shoppingCartRepository;
    }

    @Override
    public void saveOrUpdate(ShoppingCartDTO shoppingCartDTO) {

        UserDetails userDetails = userService.findById(shoppingCartDTO.getUserId());

        List<Event> events = shoppingCartDTO.getEventsIds().stream()
                .map(eventService::findById).collect(Collectors.toList());

        events.forEach(event -> {
            ShoppingCart shoppingCartEl = ShoppingCart.builder()
                    .event(event)
                    .userDetails(userDetails)
                    .build();

            shoppingCartRepository.save(shoppingCartEl);
        });
    }
}
