package server.eventooserver.api.v1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import server.eventooserver.domain.ShoppingCart;

import java.util.List;
import java.util.Optional;

@Repository
public interface ShoppingCartRepository extends JpaRepository<ShoppingCart, Long> {
    List<ShoppingCart> findAllByUserDetailsId(Long id);

    Optional<ShoppingCart> findByUserDetailsIdAndEventId(Long userId, Long eventId);

}
