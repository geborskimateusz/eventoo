package server.eventooserver.api.v1.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import server.eventooserver.api.v1.dto.InvoiceDTO;
import server.eventooserver.domain.Invoice;

@Mapper(componentModel = "spring")
public interface InvoiceMapper {

    InvoiceMapper INSTANCE = Mappers.getMapper(InvoiceMapper.class);

    Invoice invoiceDTOtoInvoice(InvoiceDTO invoiceDTO);

    InvoiceDTO invoiceToInvoicerDTO(Invoice invoice);
}
