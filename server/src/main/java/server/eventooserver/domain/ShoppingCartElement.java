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
@NoArgsConstructor
@Entity(name = "ShoppingCart")
@Table(name = "shopping_cart")
public class ShoppingCartElement extends BaseEntity {

    @Builder
    public ShoppingCartElement(UserDetails userDetails, Event event) {
        this.userDetails = userDetails;
        this.event = event;
    }

    @OneToOne
    @JoinColumn(name = "user_details_id")
    private UserDetails userDetails;

    @OneToOne
    @JoinColumn(name = "event_id")
    private Event event;


}
