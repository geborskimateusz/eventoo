//package server.eventooserver.bootstrap;
//
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.stereotype.Component;
//import server.eventooserver.api.v1.dto.EventDTO;
//import server.eventooserver.api.v1.dto.EventsDTO;
//import server.eventooserver.api.v1.dto.LocationDTO;
//import server.eventooserver.api.v1.dto.TicketDTO;
//import server.eventooserver.api.v1.repository.EventRepository;
//import server.eventooserver.api.v1.service.EventService;
//import server.eventooserver.domain.*;
//
//import java.time.LocalDate;
//import java.util.Arrays;
//import java.util.Collections;
//import java.util.HashSet;
//
//@Component
//public class Bootstrap implements CommandLineRunner {
//
//    EventService eventService;
//    EventRepository eventRepository;
//
//    public Bootstrap(EventService eventService, EventRepository eventRepository) {
//        this.eventService = eventService;
//        this.eventRepository = eventRepository;
//    }
//
//    @Override
//    public void run(String... args) throws Exception {
//
//        System.out.println("i nrun");
//
//        TicketDTO ticketDTO = TicketDTO.builder()
//                .inStock(12)
//                .price(12)
//                .totalAmmount(12)
//                .type(TicketType.GENERAL_ADMISSION)
//                .build();
//
//        EventDTO eventDTO = EventDTO.builder()
//                .date(LocalDate.now())
//                .description("a")
//                .genre(MusicGenre.DANCE)
//                .img("a")
//                .location(
//                        LocationDTO.builder()
//                        .partialAddress("a")
//                        .lat(1.1)
//                        .lon(1.2)
//                        .fullAddress("")
//                        .build()
//                )
//                .tickets(new HashSet<>(Collections.singletonList(ticketDTO)))
//                .title("a")
//               .build();
//
//        EventsDTO eventsDTO = EventsDTO.builder().events(Arrays.asList(eventDTO, eventDTO, eventDTO, eventDTO,eventDTO,eventDTO,eventDTO,eventDTO,eventDTO)).build();
//
//        eventService.saveAll(eventsDTO);
//
////        eventDTO.getTickets().forEach(eventDTO::addTicket);
////        eventRepository.save(eventDTO);
//    }
//}
