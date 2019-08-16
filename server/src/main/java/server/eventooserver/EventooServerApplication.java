package server.eventooserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableTransactionManagement
public class EventooServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(EventooServerApplication.class, args);
    }

}
