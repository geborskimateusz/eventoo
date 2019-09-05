package server.eventooserver.helpers.bootstrap;

import server.eventooserver.api.v1.dto.AddressDTO;
import server.eventooserver.api.v1.dto.UserDetailsDTO;
import server.eventooserver.domain.Address;
import server.eventooserver.domain.User;
import server.eventooserver.domain.UserDetails;

public class UserDetailsDatasource {

    public static final String FIRST_NAME = "John";
    public static final String LAST_NAME = "Doe";
    public static final String PHONE = "123-321-231";
    public static final String EMAIL = "fakeemail@gmail.com";
    public static final String FAKE_URL = "Fake url";
    public static final Address ADDRESS = AddressDatasource.getAddress();
    public static final AddressDTO ADDRESS_DTO = AddressDatasource.getAddressDTO();
    public static final String FAKE_PASSWORD = "fake password";

    public static UserDetails getUserDetails() {
        return UserDetails.builder()
                .firstName(FIRST_NAME)
                .lastName(LAST_NAME)
                .phone(PHONE)
                .email(EMAIL)
                .address(ADDRESS)
                .imagePath(FAKE_URL)
                .build();
    }

    public static UserDetailsDTO getUserDetailsDTO() {
        return UserDetailsDTO.builder()
                .firstName(FIRST_NAME)
                .lastName(LAST_NAME)
                .phone(PHONE)
                .email(EMAIL)
                .address(ADDRESS_DTO)
                .imagePath(FAKE_URL)
                .build();
    }

    public static User getUser() {
        return User.builder()
                .username(EMAIL)
                .password(FAKE_PASSWORD)
                .build();
    }
}
