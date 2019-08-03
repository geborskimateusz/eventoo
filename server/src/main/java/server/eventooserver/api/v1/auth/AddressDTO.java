package server.eventooserver.api.v1.auth;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class AddressDTO {
    private String country;
    private String city;
    private String street;
    private String homeNo;
    private String postalCode;
}
