package server.eventooserver.api.v1.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;
import server.eventooserver.api.v1.dto.ShoppingCartDTO;
import server.eventooserver.domain.ShoppingCart;

@Mapper(componentModel = "spring")
public interface ShoppingCartMapper {

    ShoppingCartMapper INSTANCE = Mappers.getMapper(ShoppingCartMapper.class);

    @Mapping(target = "userId", source = "userDetails.id" )
    ShoppingCartDTO shoppingCartToShoppingCartDTO(ShoppingCart shoppingCart);
}
