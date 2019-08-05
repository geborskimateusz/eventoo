package server.eventooserver.api.v1.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import server.eventooserver.api.v1.repository.UserDetailsRepository;
import server.eventooserver.api.v1.mapper.UserDetailsMapper;
import server.eventooserver.api.v1.service.exception.ResourceNotFoundException;
import server.eventooserver.domain.User;
import server.eventooserver.api.v1.dto.UserDetailsDTO;

@Slf4j
@Service
public class UserServiceImpl implements UserService {

    private final UserDetailsMapper userDetailsMapper = UserDetailsMapper.INSTANCE;

    private final UserDetailsRepository userDetailsRepository;

    public UserServiceImpl(UserDetailsRepository userDetailsRepository) {
        this.userDetailsRepository = userDetailsRepository;
    }

    @Override
    public UserDetailsDTO authenticateUser(User user) {

            log.info(this.getClass().getSimpleName() + ", UserDetailsDTO authenticateUser(User user)");

            return userDetailsMapper.UserDetailsToUserDetailsDTO(
                    userDetailsRepository.findByEmail(user.getUsername())
                            .orElseThrow(ResourceNotFoundException::new));
    }
}
