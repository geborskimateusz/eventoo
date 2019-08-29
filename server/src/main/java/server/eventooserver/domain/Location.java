package server.eventooserver.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@Entity(name = "Location")
@Table(name = "location")
public class Location extends BaseEntity {

    private String partialAddress;
    private String fullAddress;
    private Double lat;
    private Double lon;

    @Builder
    public Location(String partialAddress, String fullAddress, Double lat, Double lon) {
        this.partialAddress = partialAddress;
        this.fullAddress = fullAddress;
        this.lat = lat;
        this.lon = lon;
    }

    @Override
    public String toString() {
        return "Location{" +
                "partialAddress='" + partialAddress + '\'' +
                ", fullAddress='" + fullAddress + '\'' +
                ", lat=" + lat +
                ", lon=" + lon +
                '}';
    }
}
