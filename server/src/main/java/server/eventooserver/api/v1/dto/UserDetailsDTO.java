package server.eventooserver.api.v1.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import server.eventooserver.api.v1.dto.AddressDTO;

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
