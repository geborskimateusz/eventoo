package server.eventooserver.api.v1.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class LocationDTO {

    private String partialAddress;
    private String fullAddress;
    private Double lat;
    private Double lon;

    @Builder
    public LocationDTO(String partialAddress, String fullAddress, Double lat, Double lon) {
        this.partialAddress = partialAddress;
        this.fullAddress = fullAddress;
        this.lat = lat;
        this.lon = lon;
    }

    @Override
    public String toString() {
        return "LocationDTO{" +
                "partialAddress='" + partialAddress + '\'' +
                ", fullAddress='" + fullAddress + '\'' +
                ", lat=" + lat +
                ", lon=" + lon +
                '}';
    }
}
