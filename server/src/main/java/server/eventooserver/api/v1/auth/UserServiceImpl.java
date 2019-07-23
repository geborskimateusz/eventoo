package server.eventooserver.api.v1.auth;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class UserServiceImpl implements UserService {

    @Override
    public UserDTO authenticateUser(User user) {
            log.info(this.getClass().getSimpleName() + ", UserDTO authenticateUser(User user)");
            return UserDTO.builder().id(1).email(user.getUsername()).build();
    }
}
