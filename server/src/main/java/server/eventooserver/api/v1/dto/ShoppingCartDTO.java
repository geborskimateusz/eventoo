package server.eventooserver.api.v1.dto;

import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class ShoppingCartDTO {
    private Long userId;
    private List<EventDTO> events;

    @Builder
    public ShoppingCartDTO(Long userId, List<EventDTO> events) {
        this.userId = userId;
        this.events = events;
    }




    @Override
    public String toString() {
        return "ShoppingCartDTO{" +
                "userId=" + userId +
                ", events=" + events+
                '}';
    }
}
