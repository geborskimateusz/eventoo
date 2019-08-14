package server.eventooserver.api.v1.service;

import server.eventooserver.domain.User;
import server.eventooserver.api.v1.dto.UserDetailsDTO;

public interface UserService {

    UserDetailsDTO authenticateUser(User user);

    UserDetailsDTO findById(Long id);
}
