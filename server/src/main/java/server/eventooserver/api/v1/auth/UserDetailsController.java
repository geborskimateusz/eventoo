package server.eventooserver.api.v1.auth;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

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
    public UserDTO loadUserByUserName(@RequestBody User user) {
        log.info(this.getClass().getSimpleName() + ",  public UserDTO loadUserByUserName(@RequestBody User user)");
        return userService.authenticateUser(user);
    }

}
