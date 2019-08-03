package server.eventooserver.api.v1.auth;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class UserDetailsDTO {
    private Integer id;
    private String firstName;
    private String lastName;
    private String phone;
    private String email;
    private AddressDTO address;
    private String imagePath;

}
