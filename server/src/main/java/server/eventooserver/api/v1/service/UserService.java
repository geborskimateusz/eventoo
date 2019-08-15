package server.eventooserver.api.v1.service;

import server.eventooserver.domain.User;
import server.eventooserver.api.v1.dto.UserDetailsDTO;
import server.eventooserver.domain.UserDetails;

public interface UserService {

    UserDetailsDTO authenticateUser(User user);

    UserDetailsDTO findDTOById(Long id);
    UserDetails findById(Long id);
}
