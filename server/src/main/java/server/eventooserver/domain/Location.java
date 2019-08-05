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

    @ManyToMany
    @JoinTable(name="event_location",
            joinColumns = {@JoinColumn(name = "location_id")},
            inverseJoinColumns = {@JoinColumn(name = "event_id")})
    private Set<Event> events = new HashSet<>();

    @Builder
    public Location(String partialAddress, String fullAddress, Double lat, Double lon, Set<Event> events) {
        this.partialAddress = partialAddress;
        this.fullAddress = fullAddress;
        this.lat = lat;
        this.lon = lon;
        this.events = events;
    }
}
