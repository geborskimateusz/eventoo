package server.eventooserver.bootstrap;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import server.eventooserver.api.v1.repository.AddressRepository;
import server.eventooserver.api.v1.repository.UserDetailsRepository;
import server.eventooserver.domain.Address;
import server.eventooserver.domain.UserDetails;

@Component
public class Bootstrap implements CommandLineRunner {

    UserDetailsRepository userDetailsRepository;
    AddressRepository addressRepository;

    public Bootstrap(UserDetailsRepository userDetailsRepository, AddressRepository addressRepository) {
        this.userDetailsRepository = userDetailsRepository;
        this.addressRepository = addressRepository;
    }

    @Override
    public void run(String... args) throws Exception {

        Address address = Address.builder()
                .country("Fake country")
                .city("Fake city")
                .street("Some Fake Street")
                .homeNo("2/54D")
                .postalCode("23-412")
                .build();

        Address savedAddress = addressRepository.save(address);


        UserDetails userDetails = UserDetails.builder()
                .firstName("John")
                .lastName("Doe")
                .phone("593-131-341")
                .email("fakeemail@gmail.com")
                .address(savedAddress)
                .imagePath("../../assets/img/user-1.jpg")
                .build();

        userDetailsRepository.save(userDetails);

    }
}
