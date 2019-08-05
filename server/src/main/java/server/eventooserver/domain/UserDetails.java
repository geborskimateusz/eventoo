package server.eventooserver.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import server.eventooserver.api.v1.dto.AddressDTO;

import javax.persistence.*;

@Builder
@Getter
@Setter
@Entity(name = "UserDetails")
@Table(name = "user_details")
public class UserDetails extends BaseEntity{

    private String firstName;
    private String lastName;
    private String phone;
    private String email;
    private AddressDTO address;
    private String imagePath;
}
