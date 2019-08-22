package server.eventooserver.api.v1.dto;

import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class ShoppingCartDTO {
    private Long userId;
    private List<Long> eventsIds;

    @Builder
    public ShoppingCartDTO(List<Long> eventsIds) {
        this.eventsIds = eventsIds;
    }

    @Override
    public String toString() {
        return "ShoppingCartDTO{" +
                "userId=" + userId +
                ", eventsIds=" + eventsIds +
                '}';
    }
}
