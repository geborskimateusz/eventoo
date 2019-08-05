package server.eventooserver.api.v1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import server.eventooserver.domain.Address;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {
}
