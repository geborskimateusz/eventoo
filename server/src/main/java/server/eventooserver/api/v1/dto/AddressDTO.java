package server.eventooserver.api.v1.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
public class AddressDTO extends BaseEntityDTO {
    private String country;
    private String city;
    private String street;
    private String homeNo;
    private String postalCode;

    @Builder
    public AddressDTO(String country, String city, String street, String homeNo, String postalCode) {
        this.country = country;
        this.city = city;
        this.street = street;
        this.homeNo = homeNo;
        this.postalCode = postalCode;
    }

    @Override
    public String toString() {
        return "AddressDTO{" +
                "country='" + country + '\'' +
                ", city='" + city + '\'' +
                ", street='" + street + '\'' +
                ", homeNo='" + homeNo + '\'' +
                ", postalCode='" + postalCode + '\'' +
                '}';
    }
}
