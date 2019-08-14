package server.eventooserver.api.v1.service;

import com.itextpdf.text.DocumentException;
import server.eventooserver.api.v1.dto.OrderDTO;

import java.io.IOException;
import java.net.URISyntaxException;

public interface FilesUtilService {

     void generateOrderConfirmation(OrderDTO orderDTO) throws DocumentException, IOException, URISyntaxException;
}
