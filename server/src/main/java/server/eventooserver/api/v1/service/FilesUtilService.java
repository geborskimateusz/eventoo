package server.eventooserver.api.v1.service;

import com.itextpdf.text.DocumentException;
import server.eventooserver.api.v1.dto.InvoiceDTO;
import server.eventooserver.domain.Invoice;

import java.io.IOException;
import java.net.URISyntaxException;

public interface FilesUtilService {

     String generateConfirmationOrder(Invoice invoice);
}
