package server.eventooserver.api.v1.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import server.eventooserver.api.v1.dto.AddressDTO;
import server.eventooserver.domain.Invoice;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
public class UserDetailsDTO extends BaseEntityDTO {
    private String firstName;
    private String lastName;
    private String phone;
    private String email;
    private AddressDTO address;
    private String imagePath;
    private Set<Invoice> invoices = new HashSet<>();

    @Builder
    public UserDetailsDTO(String firstName, String lastName, String phone, String email, AddressDTO address, String imagePath, Set<Invoice> invoices) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.imagePath = imagePath;
        this.invoices = invoices;
    }

    @Override
    public String toString() {
        return "UserDetailsDTO{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", phone='" + phone + '\'' +
                ", email='" + email + '\'' +
                ", address=" + address +
                ", imagePath='" + imagePath + '\'' +
                ", invoices=" + invoices +
                '}';
    }
}
