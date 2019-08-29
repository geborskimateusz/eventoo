package server.eventooserver.helpers.bootstrap;

import server.eventooserver.api.v1.dto.AddressDTO;

public class AddressDTOdatasource {

    public static AddressDTO getAddressDTO() {
        return AddressDTO.builder()
                .homeNo("2")
                .street("Fake street")
                .city("Fake City")
                .country("Fake Country")
                .postalCode("12-123")
                .build();
    }
}
