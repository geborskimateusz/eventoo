package server.eventooserver.helpers.bootstrap;

import server.eventooserver.api.v1.dto.AddressDTO;
import server.eventooserver.api.v1.dto.UserDetailsDTO;

public class UserDetailsDTOdatasource {

    public static final String FIRST_NAME = "John";
    public static final String LAST_NAME = "Doe";
    public static final String PHONE = "123-321-231";
    public static final String EMAIL = "fakeemail@gmail.com";
    public static final AddressDTO ADDRESS_DTO = AddressDTOdatasource.getAddressDTO();
    public static final String FAKE_URL = "Fake url";

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
}
