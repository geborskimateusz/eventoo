package server.eventooserver.api.v1.controller;


import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import server.eventooserver.api.v1.dto.EventsDTO;
import server.eventooserver.api.v1.service.EventService;
import server.eventooserver.helpers.bootstrap.EventsDTOdatasource;
import server.eventooserver.helpers.controller.TestApiUrlStrings;

import static org.hamcrest.Matchers.equalTo;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;
import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class EventControllerTest {

    @Mock
    EventService eventService;

    @InjectMocks
    EventController eventController;

    MockMvc mockMvc;

    public EventControllerTest() {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(eventController)
                .addPlaceholderValue("cors.origin.value", "http://localhost:4200")
                .build();
    }


    @Test
    public void findByGenre() throws Exception {

        EventsDTO expected = EventsDTOdatasource.getEventsDTO();

        when(eventService.findByGenre(anyString(), anyInt())).thenReturn(expected);

        mockMvc.perform(get(TestApiUrlStrings.API_V1_EVENTS_FIND_BY_GENRE)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.events", hasSize(3)))
                .andExpect(jsonPath("$.events[2].title", equalTo("Fake Title")))
                .andExpect(jsonPath("$.events[2].tickets", hasSize(1)));


    }

}