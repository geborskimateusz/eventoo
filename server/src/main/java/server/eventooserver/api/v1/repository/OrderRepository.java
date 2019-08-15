package server.eventooserver.api.v1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import server.eventooserver.domain.Invoice;

public interface OrderRepository extends JpaRepository<Invoice, Long> {
}
