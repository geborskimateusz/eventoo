//package server.eventooserver.bootstrap;
//
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.stereotype.Component;
//
//import server.eventooserver.api.v1.repository.AddressRepository;
//import server.eventooserver.api.v1.repository.EventRepository;
//import server.eventooserver.api.v1.repository.UserDetailsRepository;
//import server.eventooserver.api.v1.service.EventService;
//import server.eventooserver.domain.Address;
//import server.eventooserver.domain.UserDetails;
//
//
//@Component
//public class Bootstrap implements CommandLineRunner {
//
//    UserDetailsRepository userDetailsRepository;
//    AddressRepository addressRepository;
//
//    public Bootstrap(UserDetailsRepository userDetailsRepository, AddressRepository addressRepository) {
//        this.userDetailsRepository = userDetailsRepository;
//        this.addressRepository = addressRepository;
//    }
//
//    @Override
//    public void run(String... args) throws Exception {
//        Address address = Address.builder()
//                .country("Fcountry")
//                .city("Fcity")
//                .homeNo("2/65")
//                .postalCode("23-432")
//                .street("Fstreet")
//                .build();
//
//        Address saved = addressRepository.save(address);
//
//        UserDetails userDetails = UserDetails.builder()
//                .firstName("John")
//                .lastName("Doe")
//                .email("fakeemail@gmail.com")
//                .imagePath("src/assets/img/user-1.jpg")
//                .phone("987-879-789")
//                .address(saved)
//                .build();
//
//        userDetailsRepository.save(userDetails);
//    }
//}
