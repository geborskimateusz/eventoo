package server.eventooserver.api.v1.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import server.eventooserver.domain.User;
import server.eventooserver.api.v1.dto.UserDetailsDTO;
import server.eventooserver.api.v1.service.UserService;

@Slf4j
@CrossOrigin(value = "${cors.origin.value}")
@RestController
@RequestMapping(UserDetailsController.API_V_1_USER)
public class UserDetailsController {

    public static final String API_V_1_USER = "api/v1/user";
    private UserService userService;

    public UserDetailsController(UserService userService) {
        this.userService = userService;
    }

    @ResponseStatus(HttpStatus.OK)
    @PostMapping(value = "/login")
    public UserDetailsDTO loadUserByUserName(@RequestBody User user) {
        log.info(this.getClass().getSimpleName() + ",  public UserDetailsDTO loadUserByUserName(@RequestBody User user)");
        return userService.authenticateUser(user);
    }

}
