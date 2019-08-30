package server.eventooserver.helpers.bootstrap;

import server.eventooserver.api.v1.dto.AddressDTO;
import server.eventooserver.domain.Address;

public class AddressDatasource {


    public static final String HOME_NO = "2";
    public static final String FAKE_STREET = "Fake street";
    public static final String FAKE_CITY = "Fake City";
    public static final String FAKE_COUNTRY = "Fake Country";
    public static final String POSTAL_CODE = "12-123";

    public static Address getAddress() {
        return Address.builder()
                .homeNo(HOME_NO)
                .street(FAKE_STREET)
                .city(FAKE_CITY)
                .country(FAKE_COUNTRY)
                .postalCode(POSTAL_CODE)
                .build();
    }

    public static AddressDTO getAddressDTO() {
        return AddressDTO.builder()
                .homeNo(HOME_NO)
                .street(FAKE_STREET)
                .city(FAKE_CITY)
                .country(FAKE_COUNTRY)
                .postalCode(POSTAL_CODE)
                .build();
    }
}
