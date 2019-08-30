package server.eventooserver.api.v1.controller;

import jdk.nashorn.internal.ir.annotations.Ignore;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import server.eventooserver.api.v1.dto.ShoppingCartDTO;
import server.eventooserver.api.v1.service.ShoppingCartService;
import server.eventooserver.helpers.bootstrap.ShoppingCartDatasource;
import server.eventooserver.helpers.controller.TestApiUrlStrings;

import static org.hamcrest.Matchers.hasSize;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static server.eventooserver.helpers.controller.AbstractRestControllerTest.asJsonString;

public class ShoppingCartControllerTest {

    @Mock
    ShoppingCartService shoppingCartService;

    @InjectMocks
    ShoppingCartController shoppingCartController;

    MockMvc mockMvc;

    public ShoppingCartControllerTest() {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(shoppingCartController)
                .addPlaceholderValue("cors.origin.value", "http://localhost:4200")
                .build();
    }

    @Test
    public void getShoppingCart() throws Exception {

        ShoppingCartDTO expected = ShoppingCartDatasource.getShoppingCartDTO();

        when(shoppingCartService.findByUserId(anyLong())).thenReturn(expected);

        String url = TestApiUrlStrings.API_V1_SHOPPING_CART + "/" + expected.getUserId();
        mockMvc.perform(get(url)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.events", hasSize(1)));

    }

    //TODO
    @Ignore
    @Test
    public void putShoppingCart() throws Exception {

        ShoppingCartDTO expected = ShoppingCartDatasource.getShoppingCartDTO();

        String url = TestApiUrlStrings.API_V1_SHOPPING_CART;
        mockMvc.perform(put(url)
                .contentType(MediaType.APPLICATION_JSON)
                .content(asJsonString(expected)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.events", hasSize(1)));
    }

    @Test
    public void deleteFromShoppingCart() throws Exception {
        Long userId = 1L;
        Long eventId = 2L;

        String url = TestApiUrlStrings.API_V1_SHOPPING_CART + "/" + userId;
        mockMvc.perform(delete(url)
                .param("eventId", eventId.toString())
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

        verify(shoppingCartService, times(1))
                .deleteByUserIdAndEventId(userId,eventId);

    }
}