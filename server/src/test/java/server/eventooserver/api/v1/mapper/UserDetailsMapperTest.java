package server.eventooserver.api.v1.mapper;

import org.junit.jupiter.api.Test;
import server.eventooserver.api.v1.dto.UserDetailsDTO;
import server.eventooserver.domain.UserDetails;
import server.eventooserver.helpers.Comparator;
import server.eventooserver.helpers.bootstrap.UserDetailsDatasource;

class UserDetailsMapperTest {

    UserDetailsMapper userDetailsMapper = UserDetailsMapper.INSTANCE;

    @Test
    void userDetailsToUserDetailsDTO() {

        UserDetails userDetails = UserDetailsDatasource.getUserDetails();
        UserDetailsDTO userDetailsDTO = userDetailsMapper.UserDetailsToUserDetailsDTO(userDetails);

        Comparator.contains(userDetailsDTO,userDetails);
    }
}