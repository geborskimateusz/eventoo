package server.eventooserver.api.v1.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import server.eventooserver.api.v1.dto.ShoppingCartDTO;
import server.eventooserver.api.v1.repository.ShoppingCartRepository;
import server.eventooserver.domain.ShoppingCartElement;
import server.eventooserver.domain.UserDetails;
import server.eventooserver.helpers.bootstrap.ShoppingCartDatasource;
import server.eventooserver.helpers.bootstrap.UserDetailsDatasource;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

class ShoppingCartServiceImplTest {

    public static final long USER_ID = 1L;
    public static final long ELEMENT_ID = 1L;
    public static final long EVENT_ID = 1L;
    @Mock
    UserService userService;

    @Mock
    EventService eventService;

    @Mock
    ShoppingCartRepository shoppingCartRepository;

    ShoppingCartService shoppingCartService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
        shoppingCartService = new ShoppingCartServiceImpl(
                userService,
                eventService,
                shoppingCartRepository);
    }

    @Test
    void findByUserId() {
        List<ShoppingCartElement> shoppingCartElements = ShoppingCartDatasource.getShoppingCartElements();

        when(shoppingCartRepository.findAllByUserDetailsId(anyLong())).thenReturn(shoppingCartElements);

        ShoppingCartDTO actual = shoppingCartService.findByUserId(USER_ID);

        assertNotNull(actual.getUserId());
        assertNotNull(actual.getEvents());
        assertEquals(actual.getEvents().size(), shoppingCartElements.size());
    }

    @Test
    void deleteByUserIdAndEventIdSuccess() {

        ShoppingCartElement shoppingCartElement = ShoppingCartDatasource.getShoppingCartElement();
        shoppingCartElement.setId(ELEMENT_ID);

        when(shoppingCartRepository.findByUserDetailsIdAndEventId(anyLong(),anyLong()))
                .thenReturn(Optional.of(shoppingCartElement));

        shoppingCartService.deleteByUserIdAndEventId(USER_ID, EVENT_ID);

        verify(shoppingCartRepository, times(1)).deleteById(shoppingCartElement.getId());
    }

    @Test
    void deleteByUserIdAndEventIdFail() {

        when(shoppingCartRepository.findByUserDetailsIdAndEventId(anyLong(),anyLong()))
                .thenReturn(Optional.empty());

        shoppingCartService.deleteByUserIdAndEventId(USER_ID, EVENT_ID);

        verify(shoppingCartRepository, times(0)).deleteById(anyLong());
    }

    @Test
    void saveOrUpdate() {

        UserDetails userDetails = UserDetailsDatasource.getUserDetails();
        userDetails.setId(USER_ID);

        ShoppingCartDTO shoppingCartDTO = ShoppingCartDatasource.getShoppingCartDTO();

        ShoppingCartElement shoppingCartElement = ShoppingCartDatasource.getShoppingCartElement();

        when(userService.findById(anyLong())).thenReturn(userDetails);

        when(shoppingCartRepository.findByUserDetailsIdAndEventId(anyLong(),anyLong()))
                .thenReturn(Optional.of(shoppingCartElement));

        shoppingCartService.saveOrUpdate(shoppingCartDTO);

        verify(eventService, times(0)).findById(anyLong());

    }
}