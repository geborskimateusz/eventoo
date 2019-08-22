package server.eventooserver.api.v1.service;

import server.eventooserver.api.v1.dto.ShoppingCartDTO;

public interface ShoppingCartService {
    void saveOrUpdate(ShoppingCartDTO shoppingCartDTO);

    ShoppingCartDTO findByUserId(Long userId);
}
