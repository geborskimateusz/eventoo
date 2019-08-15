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
@Entity(name = "UserDetails")
@Table(name = "user_details")
public class UserDetails extends BaseEntity{

    private String firstName;
    private String lastName;
    private String phone;
    private String email;

    @OneToOne
    @JoinColumn(name = "address_id")
    private Address address;

    private String imagePath;

    @OneToMany(mappedBy = "userDetails")
    private Set<Invoice> invoices = new HashSet<>();

    @Builder
    public UserDetails(String firstName, String lastName, String phone, String email, Address address, String imagePath) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.imagePath = imagePath;
    }

    public void addInvoice(Invoice invoice) {
        this.invoices.add(invoice);
        invoice.setUserDetails(this);
    }
}
