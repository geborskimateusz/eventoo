package server.eventooserver.api.v1.controller;

import org.junit.Ignore;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import server.eventooserver.api.v1.dto.InvoiceDTO;
import server.eventooserver.api.v1.service.OrderService;
import server.eventooserver.helpers.bootstrap.InvoiceDTOdatasource;
import server.eventooserver.helpers.controller.TestApiUrlStrings;

import static org.hamcrest.core.IsEqual.equalTo;
import static org.junit.Assert.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.patch;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static server.eventooserver.helpers.controller.AbstractRestControllerTest.asJsonString;

//TODO Develop OrderControllerTest
public class OrderControllerTest {

    @Mock
    OrderService orderService;

    @InjectMocks
    OrderController orderController;

    MockMvc mockMvc;

    public OrderControllerTest() {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(orderController)
                .addPlaceholderValue("cors.origin.value", "http://localhost:4200")
                .build();
    }

    @Ignore
    @Test
    public void bookTickets() throws Exception {

        String expected = "doe055952@gmail.com_24_2019-08-19.pdf";
        InvoiceDTO given = InvoiceDTOdatasource.getInvoiceDTO();

        when(orderService.orderTickets(any(InvoiceDTO.class))).thenReturn(expected);

        mockMvc.perform(patch(TestApiUrlStrings.API_V1_ORDER)
                .content(asJsonString(given))
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", equalTo(expected)));
    }

    @Ignore
    @Test
    public void downloadInvoice() {
    }
}