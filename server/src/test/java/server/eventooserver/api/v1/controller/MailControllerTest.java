package server.eventooserver.api.v1.controller;

import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import server.eventooserver.api.v1.service.MailService;
import server.eventooserver.helpers.controller.TestApiUrlStrings;

import static org.junit.Assert.*;
import static org.hamcrest.Matchers.equalTo;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;
import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class MailControllerTest {

    @Mock
    MailService mailService;

    @InjectMocks
    MailController mailController;

    MockMvc mockMvc;

    public MailControllerTest() {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(mailController)
                .addPlaceholderValue("cors.origin.value", "http://localhost:4200")
                .build();
    }

    @Test
    public void sendConfirmationOrder() throws Exception {

        mockMvc.perform(get(TestApiUrlStrings.API_V1_MESSAGES_SEND_CONFIRMATION_ORDER)
        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    public void contactRequest() {
    }
}