package server.eventooserver.api.v1.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;
import server.eventooserver.api.v1.dto.InvoiceDTO;
import server.eventooserver.domain.Invoice;

@Mapper(componentModel = "spring")
public interface InvoiceMapper {

    InvoiceMapper INSTANCE = Mappers.getMapper(InvoiceMapper.class);

    @Mapping(source = "userDetailsId", target = "userDetails.id")
    Invoice invoiceDTOtoInvoice(InvoiceDTO invoiceDTO);

    InvoiceDTO invoiceToInvoiceDTO(Invoice invoice);
}
