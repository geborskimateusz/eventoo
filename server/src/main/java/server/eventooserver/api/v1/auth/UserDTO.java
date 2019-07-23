package server.eventooserver.api.v1.auth;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class UserDTO {
    private Integer id;
    private String email;
}
