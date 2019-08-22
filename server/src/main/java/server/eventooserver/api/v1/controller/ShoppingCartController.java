package server.eventooserver.api.v1.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import server.eventooserver.api.v1.dto.ShoppingCartDTO;
import server.eventooserver.api.v1.service.ShoppingCartService;

@Slf4j
@CrossOrigin(value = "${cors.origin.value}")
@RestController
@RequestMapping(ShoppingCartController.API_VI_SHOPPING_CART)
public class ShoppingCartController {
    public static final String API_VI_SHOPPING_CART = "api/v1/shoppingCart";

    private final ShoppingCartService shoppingCartService;

    public ShoppingCartController(ShoppingCartService shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
    }

    @GetMapping("/{userId}")
    @ResponseStatus(HttpStatus.OK)
    public ShoppingCartDTO getShoppingCart(@PathVariable Long userId) {
        return shoppingCartService.findById(userId);
    }

    @PutMapping
    @ResponseStatus(HttpStatus.OK)
    public void putShoppingCart(@RequestBody ShoppingCartDTO shoppingCartDTO) {
        shoppingCartService.saveOrUpdate(shoppingCartDTO);
    }
}
