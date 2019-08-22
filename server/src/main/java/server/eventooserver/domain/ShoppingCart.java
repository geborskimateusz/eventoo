package server.eventooserver.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Getter
@Setter
@Builder
@Entity(name = "ShoppingCart")
@Table(name = "shopping_cart")
public class ShoppingCart extends BaseEntity {

    @OneToOne
    @JoinColumn(name = "user_details_id")
    private UserDetails userDetails;

    @OneToOne
    @JoinColumn(name = "event_id")
    private Event event;


}
