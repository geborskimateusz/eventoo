package server.eventooserver.bootstrap;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import server.eventooserver.api.v1.repository.*;
import server.eventooserver.domain.*;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Component
public class Bootstrap implements CommandLineRunner {

    UserDetailsRepository userDetailsRepository;
    AddressRepository addressRepository;
    LocationRepository locationRepository;
    TicketRepository ticketRepository;
    EventRepository eventRepository;

    public Bootstrap(UserDetailsRepository userDetailsRepository,
                     AddressRepository addressRepository,
                     LocationRepository locationRepository,
                     TicketRepository ticketRepository,
                     EventRepository eventRepository) {
        this.userDetailsRepository = userDetailsRepository;
        this.addressRepository = addressRepository;
        this.locationRepository = locationRepository;
        this.ticketRepository = ticketRepository;
        this.eventRepository = eventRepository;
    }

    @Override
    public void run(String... args) throws Exception {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        //GENERATE USER DETAILS

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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        /////GENERATE LOCATIONS/////

        Location b17Club = Location.builder()
                .partialAddress("B17 Club")
                .fullAddress("Poznań - 5.10, Klub B17")
                .lat(52.397406)
                .lon(16.859026)
                .build();


        Location b17ClubSaved = locationRepository.save(b17Club);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        /////GENERATE TICKETS/////

        Ticket vip = Ticket.builder()
                .ticketType(TicketType.VIP)
                .price(getRandom(400, 450))
                .toalAmmount(20)
                .inStock(15)
                .build();

        Ticket gcee = Ticket.builder()
                .ticketType(TicketType.GOLDEN_CIRCLE_EARLY_ENTRANCE)
                .price(getRandom(350, 400))
                .toalAmmount(20)
                .inStock(15)
                .build();

        Ticket gcr = Ticket.builder()
                .ticketType(TicketType.GOLDEN_CIRCLE_REGULAR)
                .price(getRandom(300, 350))
                .toalAmmount(20)
                .inStock(15)
                .build();

        Ticket ga = Ticket.builder()
                .ticketType(TicketType.GENERAL_ADMISSION)
                .price(getRandom(150, 200))
                .toalAmmount(20)
                .inStock(15)
                .build();

        Ticket s = Ticket.builder()
                .ticketType(TicketType.STANDS)
                .price(getRandom(50, 100))
                .toalAmmount(20)
                .inStock(15)
                .build();

        Ticket[] unsavedTickets = {vip, gcee, gcr, ga, s};





        /////GENERATE DANCE EVENTS/////


        //LITTLE BIG


        List<Ticket> savedTicketsLittleBig = ticketRepository.saveAll(Stream.of(unsavedTickets).collect(Collectors.toSet()));


        Event littleBig = Event.builder()
                .title("Little Big")
                .description("Little Big is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.")
                .date(LocalDate.now())
                .img("https://s1.ticketm.net/img/tat/dam/a/87b/9a9f97e2-9ddd-4bfd-a60c-41b57378a87b_907141_CUSTOM.jpg")
                .genre(MusicGenre.DANCE)
                .location(b17ClubSaved)
                .tickets(savedTicketsLittleBig.stream().collect(Collectors.toSet()))
                .build();

        eventRepository.save(littleBig);



    }


    public static Integer getRandom(double min, double max) {
        Double d = (Math.random() * (max + 1 - min)) + min;
        return d.intValue();
    }
}
