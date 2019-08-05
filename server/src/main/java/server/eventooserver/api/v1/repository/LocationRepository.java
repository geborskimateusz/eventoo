package server.eventooserver.api.v1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import server.eventooserver.domain.Location;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long> {
}
