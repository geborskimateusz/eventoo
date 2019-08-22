package server.eventooserver.api.v1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import server.eventooserver.domain.ShoppingCartElement;

import java.util.List;
import java.util.Optional;

@Repository
public interface ShoppingCartRepository extends JpaRepository<ShoppingCartElement, Long> {
    List<ShoppingCartElement> findAllByUserDetailsId(Long id);

    Optional<ShoppingCartElement> findByUserDetailsIdAndEventId(Long userId, Long eventId);

}
