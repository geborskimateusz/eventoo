package server.eventooserver.api.v1.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import server.eventooserver.api.v1.dto.AddressDTO;
import server.eventooserver.domain.Address;

@Mapper(componentModel = "spring")
public interface AddressMapper {

    AddressMapper INSTANCE = Mappers.getMapper(AddressMapper.class);

    AddressDTO addressToAddresDTO(Address address);
}
