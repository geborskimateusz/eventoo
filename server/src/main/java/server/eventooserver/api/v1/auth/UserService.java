package server.eventooserver.api.v1.auth;

public interface UserService {

    UserDTO authenticateUser(User user);
}
