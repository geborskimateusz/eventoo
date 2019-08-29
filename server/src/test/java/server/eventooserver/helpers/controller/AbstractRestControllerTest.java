package server.eventooserver.helpers.controller;

import com.fasterxml.jackson.databind.ObjectMapper;

public class AbstractRestControllerTest {

    // get  request/respones body and convert it to String
    // usage: for comparing values like
    // .andExpect(jsonPath("$.title", equalTo(TITLE)))
    public static String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

}