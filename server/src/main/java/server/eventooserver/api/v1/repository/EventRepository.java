package server.eventooserver.api.v1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import server.eventooserver.domain.Event;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
}
