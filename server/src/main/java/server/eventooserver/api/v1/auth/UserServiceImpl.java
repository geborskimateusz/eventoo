package server.eventooserver.api.v1.auth;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class UserServiceImpl implements UserService {

    @Override
    public UserDetailsDTO authenticateUser(User user) {
            log.info(this.getClass().getSimpleName() + ", UserDetailsDTO authenticateUser(User user)");
            return UserDetailsDTO.builder()
                    .id(1)
                    .firstName("John")
                    .lastName("Doe")
                    .phone("593-131-341")
                    .email(user.getUsername())
                    .address(AddressDTO.builder()
                            .country("Fake country")
                            .city("Fake city")
                            .street("Some Fake Street")
                            .homeNo("2/54D")
                            .postalCode("23-412")
                            .build())
                    .imagePath("../../assets/img/user-1.jpg")
                    .build();
    }
}
