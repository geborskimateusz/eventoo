package server.eventooserver.helpers.bootstrap;

import server.eventooserver.api.v1.dto.LocationDTO;

public class LocationDTOdatsource {

    public static final double LON = 0.983;
    public static final double LAT = 0.983;
    public static final String FAKE_FULL_ADDRESS = "Fake full address";
    public static final String FAKE_PARTIAL_ADDRESS = "Fake partial address";

    public static final LocationDTO getLocationDTO() {
        return LocationDTO.builder()
                .partialAddress(FAKE_PARTIAL_ADDRESS)
                .fullAddress(FAKE_FULL_ADDRESS)
                .lat(LAT)
                .lon(LON)
                .build();
    }
}
