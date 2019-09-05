package server.eventooserver.api.v1.controller;


import jdk.nashorn.internal.ir.annotations.Ignore;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import server.eventooserver.api.v1.dto.UserDetailsDTO;
import server.eventooserver.api.v1.service.UserService;
import server.eventooserver.domain.User;
import server.eventooserver.helpers.bootstrap.UserDatasource;
import server.eventooserver.helpers.bootstrap.UserDetailsDatasource;
import server.eventooserver.helpers.controller.TestApiUrlStrings;

import static org.hamcrest.core.IsEqual.equalTo;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.patch;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static server.eventooserver.helpers.controller.AbstractRestControllerTest.asJsonString;

@Disabled(value = "not ready yet")
public class UserDetailsControllerTest {

    @Mock
    UserService userService;

    @InjectMocks
    UserDetailsController userDetailsController;

    MockMvc mockMvc;

    public UserDetailsControllerTest() {
        MockitoAnnotations.initMocks(this);

        mockMvc = MockMvcBuilders.standaloneSetup(userDetailsController)
                .addPlaceholderValue("cors.origin.value", "http://localhost:4200")
                .build();
    }

    @Test
    public void authenticate() throws Exception {
        User given = UserDatasource.getUser();
        UserDetailsDTO userDetailsDTO = UserDetailsDatasource.getUserDetailsDTO();

        when(userService.authenticate(anyString())).thenReturn(userDetailsDTO);

        mockMvc.perform(post(TestApiUrlStrings.API_V1_USER_AUTHENTICATE)
                .content(asJsonString(given))
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.firstName", equalTo("John")));

        verify(userService, times(1)).authenticate(any(User.class));
    }

}