package server.eventooserver.api.v1.service;

import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import server.eventooserver.api.v1.dto.UserDetailsDTO;
import server.eventooserver.api.v1.repository.UserDetailsRepository;
import server.eventooserver.domain.User;
import server.eventooserver.domain.UserDetails;
import server.eventooserver.helpers.bootstrap.UserDetailsDatasource;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

class UserServiceImplTest {

    @Mock
    UserDetailsRepository userDetailsRepository;

    UserService userService;

    public UserServiceImplTest() {
        MockitoAnnotations.initMocks(this);
        userService = new UserServiceImpl(userDetailsRepository);
    }

    @Test
    void authenticateUser() {

        User user = UserDetailsDatasource.getUser();

        UserDetails userDetails = UserDetailsDatasource.getUserDetails();

        when(userDetailsRepository.findByEmail(anyString()))
                .thenReturn(Optional.of(userDetails));

        UserDetailsDTO userDetailsDTO = userService.authenticate(user);

        assertEquals(userDetailsDTO.getEmail(), user.getUsername());
    }

    @Test
    void findById() {

        UserDetails userDetails = UserDetailsDatasource.getUserDetails();

        when(userDetailsRepository.findById(userDetails.getId()))
                .thenReturn(Optional.of(userDetails));

        UserDetails actual = userService.findById(userDetails.getId());

        assertEquals(actual.getEmail(), userDetails.getEmail());
    }

    @Test
    void authenticateUserByUserName() {
        User user = UserDetailsDatasource.getUser();

        UserDetails userDetails = UserDetailsDatasource.getUserDetails();

        when(userDetailsRepository.findByEmail(anyString()))
                .thenReturn(Optional.of(userDetails));

        UserDetailsDTO userDetailsDTO = userService.authenticate(user.getUsername());

        assertEquals(userDetailsDTO.getEmail(), user.getUsername());
    }

    @Test
    void findDTOById() {

        UserDetails userDetails = UserDetailsDatasource.getUserDetails();

        when(userDetailsRepository.findById(userDetails.getId()))
                .thenReturn(Optional.of(userDetails));

        UserDetailsDTO actual = userService.findDTOById(userDetails.getId());

        assertEquals(actual.getEmail(), userDetails.getEmail());
    }
}