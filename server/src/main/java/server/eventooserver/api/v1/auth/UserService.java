package server.eventooserver.api.v1.auth;

public interface UserService {

    UserDetailsDTO authenticateUser(User user);
}
