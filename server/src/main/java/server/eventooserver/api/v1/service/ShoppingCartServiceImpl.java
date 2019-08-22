package server.eventooserver.api.v1.service;

import org.springframework.stereotype.Service;
import server.eventooserver.api.v1.dto.BaseEntityDTO;
import server.eventooserver.api.v1.dto.EventDTO;
import server.eventooserver.api.v1.dto.ShoppingCartDTO;
import server.eventooserver.api.v1.mapper.EventMapper;
import server.eventooserver.api.v1.mapper.ShoppingCartMapper;
import server.eventooserver.api.v1.repository.ShoppingCartRepository;
import server.eventooserver.domain.Event;
import server.eventooserver.domain.ShoppingCart;
import server.eventooserver.domain.UserDetails;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ShoppingCartServiceImpl implements ShoppingCartService {

    private final UserService userService;
    private final EventService eventService;

    private final ShoppingCartRepository shoppingCartRepository;

    private final ShoppingCartMapper shoppingCartMapper = ShoppingCartMapper.INSTANCE;
    private final EventMapper eventMapper = EventMapper.INSTANCE;

    public ShoppingCartServiceImpl(UserService userService, EventService eventService, ShoppingCartRepository shoppingCartRepository) {
        this.userService = userService;
        this.eventService = eventService;
        this.shoppingCartRepository = shoppingCartRepository;
    }

    @Override
    public ShoppingCartDTO findById(Long userId) {

        List<ShoppingCart> shoppingCartElements = shoppingCartRepository.findAllByUserDetailsId(userId);

        List<EventDTO> eventDTOS = shoppingCartElements.stream()
                .map(shoppingCart -> eventMapper.eventToEventDTO(shoppingCart.getEvent()))
                .collect(Collectors.toList());

        return ShoppingCartDTO.builder()
                .userId(userId)
                .events(eventDTOS)
                .build();

    }

    @Transactional
    @Override
    public void saveOrUpdate(ShoppingCartDTO shoppingCartDTO) {

        UserDetails userDetails = userService.findById(shoppingCartDTO.getUserId());

        List<Event> events = shoppingCartDTO.getEvents().stream()
                .map(BaseEntityDTO::getId)
                .map(eventService::findById).collect(Collectors.toList());

        events.forEach(event -> {
            ShoppingCart shoppingCartEl = ShoppingCart.builder()
                    .event(event)
                    .userDetails(userDetails)
                    .build();

            shoppingCartRepository.save(shoppingCartEl);
        });

//        List<EventDTO> eventDTOS = shoppingCartElements.stream()
//                .map(shoppingCart -> eventMapper.eventToEventDTO(shoppingCart.getEvent()))
//                .collect(Collectors.toList());
//
//        return ShoppingCartDTO.builder()
//                .userId(userDetails.getId())
//                .events(eventDTOS)
//                .build();

    }
}
