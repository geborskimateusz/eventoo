package server.eventooserver.api.v1.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;
import server.eventooserver.api.v1.dto.UserDetailsDTO;
import server.eventooserver.domain.UserDetails;

@Mapper(componentModel = "spring")
public interface UserDetailsMapper {

    UserDetailsMapper INSTANCE = Mappers.getMapper(UserDetailsMapper.class);

    @Mapping(target = "invoices", ignore = true)
    UserDetailsDTO UserDetailsToUserDetailsDTO(UserDetails userDetails);
}
