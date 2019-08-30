package server.eventooserver.domain;

import server.eventooserver.api.v1.dto.BaseEntityDTO;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;

@Getter
@Setter
@NoArgsConstructor
@Entity(name = "Address")
@Table(name = "address")
public class Address extends BaseEntity {

    private String country;
    private String city;
    private String street;
    private String homeNo;
    private String postalCode;

    @Builder
    public Address(String country, String city, String street, String homeNo, String postalCode) {
        this.country = country;
        this.city = city;
        this.street = street;
        this.homeNo = homeNo;
        this.postalCode = postalCode;
    }

    @Override
    public String toString() {
        return "Address{" +
                "country='" + country + '\'' +
                ", city='" + city + '\'' +
                ", street='" + street + '\'' +
                ", homeNo='" + homeNo + '\'' +
                ", postalCode='" + postalCode + '\'' +
                '}';
    }
}
