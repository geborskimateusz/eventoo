package server.eventooserver.helpers.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class AbstractRestControllerTest {

    // get  request/respones body and convert it to String
    // usage: for comparing values like
    // .andExpect(jsonPath("$.title", equalTo(TITLE)))
    public static String asJsonString(final Object obj) {
        try {

            String content = new ObjectMapper().writeValueAsString(obj);

            log.info(content);

            return content;

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

}